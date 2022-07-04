<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Word;
class Configs extends Model
{
    use HasFactory;
    protected $table = 'config';

    /**
     * Get the Words that owns the Configs
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function Words(): BelongsTo
    {
        return $this->belongsTo(Word::class, 'user_id', 'user_id');
    }

}
