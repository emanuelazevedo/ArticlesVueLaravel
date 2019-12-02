<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    //
    protected $fillable = ['commentText', 'article_id', 'user_id'];

    public function article()
    {
        return $this->belongsTo(Article::class);
    }
}
