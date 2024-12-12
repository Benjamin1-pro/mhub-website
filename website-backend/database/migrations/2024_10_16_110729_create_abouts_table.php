<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('abouts', function (Blueprint $table) {
            $table->id();
            $table->string("denomination");
            $table->string("email");
            $table->string("facebook_account");
            $table->string("linkedin_account");
            $table->string("twitter_account");
            $table->text("description");
            $table->string("image_one");
            $table->string("image_two");
            $table->string("mission");
            $table->string("vision");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('abouts');
    }
};
