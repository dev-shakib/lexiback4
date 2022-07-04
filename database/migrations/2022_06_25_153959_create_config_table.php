<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateConfigTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('config', function (Blueprint $table) {
            $table->id();
            $table->integer('user_id')->nullable();
            $table->text('config_name');
            $table->boolean('word_written');
            $table->text('longToSeeWord');
            $table->boolean('listenTheWord');
            $table->boolean('seeGraphicsPicture');
            $table->text('timeOfGraphics');
            $table->text('SeveralDistructionLetter');
            $table->text('flashingLightOnButton');
            $table->text('bgColorButtonWithLetter');
            $table->integer('numberOfButton');
            $table->text('wordSets');
            $table->text('durationTimeToCompleteActivity');
            $table->text('acceptanceTimeAfterTappingOnALetter');
            $table->text('constantFontColour');
            $table->text('vowelsFontColour');
            $table->text('diphthongsFontColour');
            $table->boolean('soundoflettersPhonemes');
            $table->boolean('speakTheWordWhenWordIscompleted');
            $table->text('FontSeries');
            $table->text('FontSize');
            $table->text('backgroundFrameActivitiesColour');
            $table->text('rewardTypePositive');
            $table->text('negativeFeedback');
            $table->integer('scoreFtartsFrom')->default(0);
            $table->integer('timeOfWordsOnScreen');
            $table->date('date');
            $table->boolean('optionToSeeScore');
            $table->boolean('optionToSeeDurationTime');
            $table->integer('ButtonTimeIntervalForRapidNaming');
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
        Schema::dropIfExists('config');
    }
}
