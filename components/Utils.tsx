import React, { SVGProps } from 'react'

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element,
  title: string
}

export const MultiLineString = ({ body }: { body: string }) => {
  const texts = body.split('\n').map((item, index) => {
    return (
      <React.Fragment key={index}>
        {item}
        <br />
      </React.Fragment>
    );
  });
  return <div>{texts}</div>;
};

function IconBuilder({Icon, title}: Props) {
  return (
    <div className='flex items-center space-x-1 p-1'>
      <Icon className='h-4 w-4' />
      <p className='text-sm'>{title}</p>
    </div>
  )
}

export default IconBuilder