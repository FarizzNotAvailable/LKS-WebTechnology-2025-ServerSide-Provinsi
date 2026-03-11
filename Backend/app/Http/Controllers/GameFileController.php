<?php

namespace App\Http\Controllers;

use App\Models\Game;
use App\Models\GameVersion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class GameFileController extends Controller
{
    function post(Request $request, String $slug){
        $dataClient = $request->validate([
            'zipfile'=>'file|required',
        ]);


        $game = Game::where('slug',$slug)->first();

        $version = GameVersion::where('game_id', $game->id)->orderBy('version', 'desc')->first();

        $version = $version->version+1;

        $newVersion['game_id'] = $game->id;
        $newVersion['version'] = $version;
        $newVersion['storage_path'] = 'games/'.$slug.'/'.$version.'/';

        GameVersion::create($newVersion);


        $request->file('zipfile')->store($newVersion['storage_path'], 'public');

        return;
    }

    function get(String $slug, String $version){

        $game = Game::where('slug', $slug)->first();

        $version = GameVersion::where('game_id', $game->id)->where('version', $version)->first();

        $filename = $version->storage_path."file.zip";

        if (Storage::disk('public')->exists($filename)) {
            return Storage::download($filename);
        }

        return $version->storage_path."file.zip";
    }

}
