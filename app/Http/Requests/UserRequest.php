<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
            'name' => ['required', 'string'],
            'surname' => ['required', 'string'],
            'email' => ['required', 'unique:users,email', 'email'],
            'phone' => ['required'],
            'address' => ['nullable', 'string'],
            'photo' => ['file', 'image', 'mimes:jpeg,png,gif,jpg', 'max:2048'],
        ];
    }
}
