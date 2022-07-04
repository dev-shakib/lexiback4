<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class StoreWordRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'audioFile'=> 'required|mimes:application/octet-stream,audio/mpeg,mpga,mp3,wav|max:4096',
            'imageFile' => 'required|mimes:jpg,jpeg,png,bmp,tiff |max:4096',
            'graphicsName'=>'required'
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Word is required',
            'graphicsName.required' => 'Graphics Name is required',
            'audioFile.required' => 'Audio File is required',
            'imageFile.required' => 'Image File is required'
        ];
    }
    public function failedValidation(Validator $validator) {
        //write your bussiness logic here otherwise it will give same old JSON response
    throw new HttpResponseException(response()->json($validator->errors(), 422));
    }
}
