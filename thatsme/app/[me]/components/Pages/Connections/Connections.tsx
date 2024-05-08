import React from 'react'
import styles from './page.module.css'

import Toggler from '../components/toggler/toggler'
import ButtonIcon from '@/app/global-components/button-icon/buttonicon'
import ConnectionBox from '../components/connectionbox/connectionbox'
import { useApiUrl } from '@/app/states/api'
import { useError } from '@/app/states/errorstate'

import { useConnectionsConfig } from '@/app/states/config/Connections_CF'

import { FaSave } from "react-icons/fa";

export default function ConnectionsPage() {

    const apiUrl = useApiUrl()
    const { showError, showSuccess } = useError()

    const {
        instagram, toggleInstagram,
        steam, toggleSteam,
        spotify, toggleSpotify,
        facebook, toggleFacebook,

        instagramUrl, setInstagramUrl,
        steamUrl, setSteamUrl,
        spotifyUrl, setSpotifyUrl,
        facebookUrl, setFacebookUrl,

        setInstagram, setSteam, setSpotify, setFacebook,
    } = useConnectionsConfig()

    const toggleInsta = async () => {
        try {
            const response = await fetch(apiUrl + '/toggleInstagram', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: localStorage.getItem('token') })
            });

            const data = await response.json();

            if (!data.error) {
                setInstagram(data.value)
            } else {
                showError('Something went wrong')
            }

            return data;
        } catch (error) {
            console.error('Error fetching features:', error);
            throw error;
        }
    }

    const toggleSt = async () => {
        try {
            const response = await fetch(apiUrl + '/toggleSteam', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: localStorage.getItem('token') })
            });

            const data = await response.json();

            if (!data.error) {
                setSteam(data.value)
            } else {
                showError('Something went wrong')
            }

            return data;
        } catch (error) {
            console.error('Error fetching features:', error);
            throw error;
        }
    }

    const toggleSp = async () => {
        try {
            const response = await fetch(apiUrl + '/toggleSpotify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: localStorage.getItem('token') })
            });

            const data = await response.json();

            if (!data.error) {
                setSpotify(data.value)
            } else {
                showError('Something went wrong')
            }

            return data;
        } catch (error) {
            console.error('Error fetching features:', error);
            throw error;
        }
    }

    const toggleFc = async () => {
        try {
            const response = await fetch(apiUrl + '/toggleFacebook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: localStorage.getItem('token') })
            });

            const data = await response.json();

            if (!data.error) {
                setFacebook(data.value)
            } else {
                showError('Something went wrong')
            }

            return data;
        } catch (error) {
            console.error('Error fetching features:', error);
            throw error;
        }
    }

    const saveInstagram = async () => {
        try {
            const response = await fetch(apiUrl + '/saveInstagram', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: instagramUrl, token: localStorage.getItem('token') })
            });

            const data = await response.json();

            if (!data.error) {
                showSuccess('Saved successfully')
            } else {
                showError('Something went wrong')
            }

            return data;
        } catch (error) {
            console.error('Error fetching features:', error);
            throw error;
        }
    }

    const saveSpotify = async () => {
        try {
            const response = await fetch(apiUrl + '/saveSpotify', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: spotifyUrl, token: localStorage.getItem('token') })
            });

            const data = await response.json();

            if (!data.error) {
                showSuccess('Saved successfully')
            } else {
                showError('Something went wrong')
            }

            return data;
        } catch (error) {
            console.error('Error fetching features:', error);
            throw error;
        }
    }

    const saveSteam = async () => {
        try {
            const response = await fetch(apiUrl + '/saveSteam', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: steamUrl, token: localStorage.getItem('token') })
            });

            const data = await response.json();

            if (!data.error) {
                showSuccess('Saved successfully')
            } else {
                showError('Something went wrong')
            }

            return data;
        } catch (error) {
            console.error('Error fetching features:', error);
            throw error;
        }
    }

    const saveFacebook = async () => {
        try {
            const response = await fetch(apiUrl + '/saveFacebook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ url: facebookUrl, token: localStorage.getItem('token') })
            });

            const data = await response.json();

            if (!data.error) {
                showSuccess('Saved successfully')
            } else {
                showError('Something went wrong')
            }

            return data;
        } catch (error) {
            console.error('Error fetching features:', error);
            throw error;
        }
    }


    return (
        <div className={styles.connections}>
            <div className={styles.connection}>
                <div className={styles.con}>
                    <Toggler title='Instagram' toggled={instagram ? true : false} onClick={() => { toggleInsta() }} />
                    {instagram &&
                        <>
                            <ConnectionBox value={instagramUrl} onInput={(e) => { setInstagramUrl(e.currentTarget.value) }} placeholder='username...' title='https://www.instagram.com/' />
                            <ButtonIcon
                                background="linear-gradient(to right, #470c7e, #4e1187, #551690, #5d1b99, #6420a2, #6524a6, #6728ab, #682caf, #6330ae, #5f33ae, #5a35ad, #5638ac)"
                                borderRadius="0.3em"
                                width="80px"
                                height="25px"
                                color="white"
                                title="Save"
                                titleColor="white"
                                iconFontSize="0.8rem"
                                titleFontSize='0.8rem'
                                marginTop='0.7em'
                                transform={false}
                                buttonType='submit'
                                onClick={() => { saveInstagram() }}
                            >
                                <FaSave />
                            </ButtonIcon>
                        </>
                    }
                </div>

                <div className={styles.con}>
                    <Toggler title='Steam' toggled={steam ? true : false} onClick={() => { toggleSt() }} />
                    {steam &&
                        <>
                            <ConnectionBox value={steamUrl} onInput={(e) => { setSteamUrl(e.currentTarget.value) }} placeholder='profiles/7456...' title='https://steamcommunity.com/' />
                            <ButtonIcon
                                background="linear-gradient(to right, #470c7e, #4e1187, #551690, #5d1b99, #6420a2, #6524a6, #6728ab, #682caf, #6330ae, #5f33ae, #5a35ad, #5638ac)"
                                borderRadius="0.3em"
                                width="80px"
                                height="25px"
                                color="white"
                                title="Save"
                                titleColor="white"
                                iconFontSize="0.8rem"
                                titleFontSize='0.8rem'
                                marginTop='0.7em'
                                transform={false}
                                buttonType='submit'
                                onClick={() => {saveSteam()}}
                            >
                                <FaSave />
                            </ButtonIcon>
                        </>}
                </div>
            </div>

            <div className={styles.connection}>
                <div className={styles.con}>
                    <Toggler title='Spotify' toggled={spotify ? true : false} onClick={() => { toggleSp() }} />
                    {spotify &&
                        <>
                            <ConnectionBox value={spotifyUrl} onInput={(e) => { setSpotifyUrl(e.currentTarget.value) }} placeholder='user/31ld2z...' title='https://open.spotify.com/' />
                            <ButtonIcon
                                background="linear-gradient(to right, #470c7e, #4e1187, #551690, #5d1b99, #6420a2, #6524a6, #6728ab, #682caf, #6330ae, #5f33ae, #5a35ad, #5638ac)"
                                borderRadius="0.3em"
                                width="80px"
                                height="25px"
                                color="white"
                                title="Save"
                                titleColor="white"
                                iconFontSize="0.8rem"
                                titleFontSize='0.8rem'
                                marginTop='0.7em'
                                transform={false}
                                buttonType='submit'
                                onClick={() => {saveSpotify()}}
                            >
                                <FaSave />
                            </ButtonIcon>
                        </>}
                </div>

                <div className={styles.con}>
                    <Toggler title='Facebook' toggled={facebook ? true : false} onClick={() => { toggleFc() }} />
                    {facebook &&
                        <>
                            <ConnectionBox value={facebookUrl} onInput={(e) => { setFacebookUrl(e.currentTarget.value) }} placeholder='people/username/pf...' title='https://facebook.com/' />
                            <ButtonIcon
                                background="linear-gradient(to right, #470c7e, #4e1187, #551690, #5d1b99, #6420a2, #6524a6, #6728ab, #682caf, #6330ae, #5f33ae, #5a35ad, #5638ac)"
                                borderRadius="0.3em"
                                width="80px"
                                height="25px"
                                color="white"
                                title="Save"
                                titleColor="white"
                                iconFontSize="0.8rem"
                                titleFontSize='0.8rem'
                                marginTop='0.7em'
                                transform={false}
                                buttonType='submit'
                                onClick={() => {saveFacebook()}}
                            >
                                <FaSave />
                            </ButtonIcon>
                        </>}
                </div>
            </div>
        </div>
    )
}
