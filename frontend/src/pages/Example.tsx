import { BadgeDemo } from '@/components/badge-demo'
import { CalendarDemo } from '@/components/calendar-demo'
import { CardDemo } from '@/components/card-demo'
import { CheckboxDemo } from '@/components/checkbox-demo'
import { DropdownMenuDemo } from '@/components/dropdown-menu-demo'
import { useEffect, useState } from 'react'

import { GetSystemInfo } from '../../wailsjs/go/main/App'

export function Example() {
    const [info, setInfo] = useState('')

    useEffect(() => {
        const sysInfo = async () => {
            return GetSystemInfo()
        }
        sysInfo().then((res) => {
            setInfo(res)
            console.log(res)
        })
    }, [])

    return (
        <div className="w-full p-5">
            <div className="flex flex-col justify-center max-w-screen-md mx-auto gap-5">
                <h2 className="text-2xl font-bold">Example</h2>
                <p>This is an example page.</p>
                <p>{info}</p>
                <DropdownMenuDemo />
                <BadgeDemo />
                <CardDemo />
                <CheckboxDemo />
                <CalendarDemo />
            </div>
        </div>
    )
}
