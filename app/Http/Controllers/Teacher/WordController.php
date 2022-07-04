<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Word;
use App\Http\Requests\StoreWordRequest;
class WordController extends Controller
{
    public function index()
    {
        return response()->json([
            'success'=>true,
            'data'=>Word::where('user_id', auth()->user()->id)->paginate(25)
        ]);
    }
    public function store(StoreWordRequest $request)
    {
        $validated = $request->validated();
        $data['name'] = $validated['name'];
        $data['graphicsName'] = $validated['graphicsName'];
        $data['audioFile'] = $this->moveFiles('public/word/audio/', request()->file('audioFile'));
        $data['imageFile'] = $this->moveFiles('public/word/image/', request()->file('imageFile'));
        $data['user_id'] = auth()->user()->id;
        try{

            $dup = Word::where(['name'=> $data['name'],'user_id'=>auth()->user()->id])->first();
            if (is_null($dup)) {
                $word =  Word::create($data);
                return response()->json([
                  'succcess'=>true,
                  'data'=>$word
                ]);
            } else {
                $word =  Word::where('id',$dup->id)->update($data);
                return response()->json([
                  'succcess'=>true,
                  'data'=>$dup
                ]);
            }
        }catch(exception $e)
        {
            return response()->json([
                'succcess'=>false,
                'message'=>'Word Not Created'
              ]);
        }
    }
    public function update(StoreWordRequest $request,$id)
    {

        $validated = $request->validated();
        $data['name'] = $validated['name'];
        $data['graphicsName'] = $validated['graphicsName'];

        $dup = Word::where('id', $id)->first();
        unlink(public_path('storage/word/audio/'.$dup->audioFile));
        unlink(public_path('storage/word/image/'.$dup->imageFile));
        $data['audioFile'] = $this->moveFiles('public/word/audio/', request()->file('audioFile'));
        $data['imageFile'] = $this->moveFiles('public/word/image/', request()->file('imageFile'));
        $data['user_id'] = auth()->user()->id;
        try{
            $word =  Word::where('id',$id)->update($data);
            return response()->json([
                'succcess'=>true,
                'data'=>$dup
            ]);
        }catch(exception $e)
        {
            return response()->json([
                'succcess'=>false,
                'message'=>'Word Not Created'
              ]);
        }
    }
    public function destroy($id)
    {
        $data = Word::where('id',$id)->first();
        unlink(public_path('storage/word/audio/'.$data->audioFile));
        unlink(public_path('storage/word/image/'.$data->imageFile));
        $res=Word::find($id)->delete();
        if ($res){
            $data=[
                'success'=>true,
                'msg'=>'successfully deleted'
            ];
        }else{
          $data=[
            'success'=>false,
            'msg'=>'failed to deleted'
            ];
        }
        return response()->json($data);
    }
    public function moveFiles($dir, $file)
    {
        if (!file_exists($dir)) {
            mkdir($dir, 0755, true);
        }
        // dd($dir);
        $filenameWithExt = $file->getClientOriginalName();
        //Get just filename
        $filename = pathinfo($filenameWithExt, PATHINFO_FILENAME);
        // Get just ext
        $extension = $file->getClientOriginalExtension();
        // Filename to store
        $fileNameToStore = time().'.'.$extension;
        // Upload Image
        $path = $file->storeAs($dir,$fileNameToStore);
        return $fileNameToStore;
    }
}
