import React, { SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element,
  title: string
}

function IconBuilder({Icon, title}: Props) {
  return (
    <div className='flex items-center space-x-1'>
      <Icon className='h-5 w-5' />
      <p>{title}</p>
    </div>
  )
}

export default IconBuilder