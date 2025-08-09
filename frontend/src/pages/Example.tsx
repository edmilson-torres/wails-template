import { BadgeDemo } from '@/components/badge-demo'
import { CalendarDemo } from '@/components/calendar-demo'
import { CardDemo } from '@/components/card-demo'
import { CheckboxDemo } from '@/components/checkbox-demo'
import { DropdownMenuDemo } from '@/components/dropdown-menu-demo'

export function Example() {
    return (
        <div className="w-full p-5">
            <div className="flex flex-col justify-center max-w-screen-md mx-auto gap-5">
                <h2 className="text-2xl font-bold">Example</h2>
                <p>This is an example page.</p>
                <DropdownMenuDemo />
                <BadgeDemo />
                <CardDemo />
                <CheckboxDemo />
                <CalendarDemo />
            </div>
        </div>
    )
}
