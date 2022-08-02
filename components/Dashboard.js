import Body from "./Body";
import Right from "./Right";
import Sidebar from "./Sidebar";
import Player from "./Player";
import { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { useSession } from "next-auth/react";
import { playingTrackState } from "../atoms/playerAtom";
import { useRecoilState } from "recoil";

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
});

const Dashboard = () => {
  const [playingTrack, setPlayingTrack] = useRecoilState(playingTrackState);
  const chooseTrack = (track) => {
    setPlayingTrack(track);
  };
  return (
    <main className="flex min-h-screen min-w-max bg-black lg:pb-24">
      <Sidebar />
      <Body chooseTrack={chooseTrack} spotifyApi={spotifyApi} />
      <Right chooseTrack={chooseTrack} spotifyApi={spotifyApi} />
    </main>
  );
};

export default Dashboard;
