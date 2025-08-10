'use client'

import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

export function CheckboxDemo() {
    return (
        <div className="flex flex-col gap-6 max-w-sm">
            <div className="flex items-center gap-3">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
            <div className="flex items-start gap-3">
                <Checkbox id="terms-2" defaultChecked />
                <div className="grid gap-2">
                    <Label htmlFor="terms-2">Accept terms and conditions</Label>
                    <p className="text-muted-foreground text-sm">
                        By clicking this checkbox, you agree to the terms and
                        conditions.
                    </p>
                </div>
            </div>
            <div className="flex items-start gap-3">
                <Checkbox id="toggle" disabled />
                <Label htmlFor="toggle">Enable notifications</Label>
            </div>
            <Label
                className="hover:bg-primary/20 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=true]]:accent-accent-foreground has-[[aria-checked=true]]:bg-primary/20"
                htmlFor="toggle-2"
            >
                <Checkbox id="toggle-2" defaultChecked />
                <div className="grid gap-1.5 font-normal">
                    <p className="text-sm leading-none font-medium">
                        Enable notifications
                    </p>
                    <p className="text-muted-foreground text-sm">
                        You can enable or disable notifications at any time.
                    </p>
                </div>
            </Label>
        </div>
    )
}
