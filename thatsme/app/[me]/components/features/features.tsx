import React from 'react'

import { useEditor } from '@/app/states/editor'
import { useError } from '@/app/states/errorstate'

import DesignPage from '../Pages/Design/Design'
import Connections from '../Pages/Connections/Connections'

export default function FeaturesPages() {


    const { toggleBoolean, page, setPage, option, setOption } = useEditor()
    const { showError } = useError()

    return (
        <>
            {page === 'design' && <DesignPage />}
            {page === 'connections' && <Connections />}
        </>
    )
}
