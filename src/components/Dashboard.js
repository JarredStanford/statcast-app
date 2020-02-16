import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Dashboard = () => {

    const [player, setPlayer] = useState()
    const [stats, setStats] = useState()

    useEffect(() => {
        const getPlayer = async () => {
            const player = await axios.get("http://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&active_sw='Y'&name_part='trout%25'")


            const stats = await axios.get("http://lookup-service-prod.mlb.com/json/named.sport_hitting_tm.bam?league_list_id='mlb'&game_type='R'&season='2018'&player_id='545361'")
            setPlayer(player.data.search_player_all.queryResults.row)
            setStats(stats.data.sport_hitting_tm.queryResults.row)
        }

        getPlayer()
    }, [])

    console.log(player)
    console.log(stats)

    if (!player || !stats) { return 'loading...' }

    return (
        <>
            <div>{player}</div>
            <div>{stats}</div>
        </>
    )

}

export default Dashboard