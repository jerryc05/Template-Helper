import { DefaultApi } from '@/_generated/typescript-fetch'
import { Button } from '@/shadcnui/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/shadcnui/ui/popover'
import { FilePlus2, Loader2 } from 'lucide-react'
import React from 'react'
import { DEFAULT_HTML } from '../util'
import { Input } from '@/shadcnui/ui/input'

export const NewTempPopover = React.memo(() => {
  const [popoverOpen, setPopoverOpen] = React.useState(false)
  const [pending, setPending] = React.useState(false)
  const [title, setTitle] = React.useState<string>('')
  return (
    <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
      <PopoverTrigger asChild>
        <Button className={bottomBtnClass}>新建模版</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form
          className='flex flex-col gap-2 p-2'
          onSubmit={e => {
            e.preventDefault()
            setPending(true)
            new DefaultApi()
              .createTemplateTemplatesPost({
                templateContent: {
                  html: DEFAULT_HTML,
                  title: title || '无标题',
                },
              })
              .then(() => {
                setPopoverOpen(false)
              })
              .catch(console.error)
              .finally(() => {
                setPending(false)
              })
          }}
        >
          <label className='flex flex-col gap-1'>
            标题
            <div className='mt-2 flex gap-x-2'>
              <Input
                className='input'
                onChange={e => {
                  setTitle(e.target.value)
                }}
              />
              <Button
                type='submit'
                disabled={!title}
                className='w-10 h-10 p-2 hover:scale-105 active:scale-100'
              >
                {!pending ? (
                  <FilePlus2 />
                ) : (
                  <Loader2 className='animate-spin' />
                )}
              </Button>
            </div>
          </label>
        </form>
      </PopoverContent>
    </Popover>
  )
})

NewTempPopover.displayName = 'NewTempPopover'

export const bottomBtnClass = 'flex-1 hover:scale-105 active:scale-100'