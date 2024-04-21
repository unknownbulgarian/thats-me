import React from 'react'

import { useEditor } from '@/app/states/editor'
import { useError } from '@/app/states/errorstate'

import DesignPage from '../Pages/Design/Design'

export default function FeaturesPages() {


    const { toggleBoolean, page, setPage, option, setOption } = useEditor()
    const { showError } = useError()

    return (
        <>
            {page === 'design' && <DesignPage />}
        </>
    )
}
