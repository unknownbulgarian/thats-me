import React from 'react'

import { useEditor } from '@/app/states/editor'
import { useError } from '@/app/states/errorstate'

import DesignPage from '../Pages/Design/Design'
import ConnectionsPage from '../Pages/Connections/Connections'
import ParticlesPage from '../Pages/Particles/Particles'
import AnimationsPage from '../Pages/Animations/Animations'
import ProfilePage from '../Pages/Profile/Profile'

export default function FeaturesPages() {


    const { page } = useEditor()
    const { showError } = useError()

    return (
        <>
            {page === 'design' && <DesignPage />}
            {page === 'connections' && <ConnectionsPage />}
            {page === 'particles' && <ParticlesPage />}
            {page === 'animations' && <AnimationsPage />}
            {page === 'profile' && <ProfilePage />}
        </>
    )
}
