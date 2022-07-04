<?php

namespace App\Http\Controllers\Teacher;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Configs;
use Schema;
class ConfigController extends Controller
{
    public function ConfigList()
    {
        $config = Configs::select('config_name')->where('user_id',auth()->user()->id)->orWhere('user_id',null)->get();
        return response()->json([
            'success'=>true,
            'data'=>$config
        ]);
    }
    public function index()
    {
        $config_name = request('config_name');

        $getConf = Configs::where('config_name',$config_name)->where('user_id',auth()->user()->id)->count();
        if((empty($config_name) || is_null($config_name)) && $getConf == 0)
        {
            $config_name = "default";
        }
        if($getConf > 0){

            return response()->json(
                [
                    'success'=>true,

                    'data'=> Configs::where('config_name',$config_name)->where('user_id',auth()->user()->id)->get()
                ]
                );
        }else{
            return response()->json(
                    [
                        'success'=>true,

                        'data'=> Configs::where('config_name',$config_name)->where('user_id',auth()->user()->id)->orWhere('user_id',null)->get()
                    ]
                    );

        }
    }
    public function destroy($id)
    {
        $res=Configs::find($id)->delete();
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
    public function updateOrCreateConfig(Request $request)
    {
        $config_name = $request->post('config_name');
        $getConf = Configs::where('config_name',$config_name)->where('user_id',auth()->user()->id)->count();

        if($getConf == 0){

            $data = $request->except('config_name');
            $default = Configs::where('config_name','default')->where('user_id',null)->first();
            $newConfig = $default->replicate();
            $newConfig['user_id'] = auth()->user()->id;
            // $new = Configs::insert($newConfig);
            $newConfig['config_name'] = $request->post('config_name');
            foreach($data as $key => $val){
                if (!Schema::hasColumn('config', $key)){
                    return response()->json([
                     'success'=>false,
                     'message'=> $key .' Column Name Not Found Please Enter Proper Key Name'
                    ]);
                   }
                $newConfig[$key] = $val;
            }
            $newConfig->save();

            return response()->json([
                'success'=>true,
                'message'=>'Successful',
                'Data' => $data
            ]);
        }else{
            $data = $request->except('config_name');
            $newConfig =  Configs::where('config_name',$request->post('config_name'))->where('user_id', auth()->user()->id)->first();
            $newConfig['user_id'] = auth()->user()->id;
            // $new = Configs::insert($newConfig);
            $newConfig['config_name'] = $request->post('config_name');
            foreach($data as $key => $val){
                if (!Schema::hasColumn('config', $key)){
                   return response()->json([
                    'success'=>false,
                    'message'=> $key .' Column Name Not Found Please Enter Proper Key Name'
                   ]);
                  }
                $newConfig[$key] = $val;
            }
            $newConfig->save();

            return response()->json([
                'success'=>true,
                'message'=>'Successful',
                'Data' => $data
            ]);
        }
    }
}
