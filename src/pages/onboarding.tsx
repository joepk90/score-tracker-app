import SlideThree from 'components/slideshow/SlideThree'
import { Global } from '@emotion/react'

export default function Onboarding() {
  return (
    <>
      <Global
        styles={{
          body: {
            fontFamily: 'system-ui, sans-serif',
            margin: 0
          }
        }}
      />
      <SlideThree key="3" />
      {/* <Slideshow
        slides={[
          <SlideOne key="1" />,
          <SlideTwo key="2" />,
          <SlideThree key="3" />
        ]}
      /> */}
    </>
  )
}
