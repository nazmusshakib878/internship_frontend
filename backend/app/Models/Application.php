<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    use HasFactory;

    protected $fillable = [
        'full_name',
        'email',
        'reason',
        'program_level',
        'status',
    ];

    /**
     * Format response matching frontend expectations
     */
    public function toArray(): array
    {
        return [
            'id' => (string) $this->id,
            'fullName' => $this->full_name,
            'email' => $this->email,
            'reason' => $this->reason,
            'programLevel' => $this->program_level,
            'status' => $this->status,
            'createdAt' => $this->created_at?->toISOString() ?? now()->toISOString(),
        ];
    }
}
