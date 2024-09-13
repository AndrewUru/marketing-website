import { Pump } from 'basehub/react-pump'
import { draftMode } from 'next/headers'

function Page() {
  return (
    <Pump
      draft={draftMode().isEnabled}
      next={{ revalidate: 30 }}
      queries={[{ __typename: true }]}
    >
      {async ([data]) => {
        'use server'

        return <>{JSON.stringify(data, null, 2)}</>
      }}
    </Pump>
  )
}

export default Page
