import React from 'react'
import { Card, CardContent } from './ui/card'
import { User } from 'lucide-react'

function DoctorCard({doctor}) {
  return (
    <Card className="border-emerald-900/20 hover:border-emerald-600 transition-all">
        <CardContent>
            <div>
                <div className='w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center flex-shrink-0'>
                    {doctor.imageUrl?(
                        <img src={doctor.imageUrl} className='w-12 h-12 rounded-full object-cover'/>
                    ):(
                        <User className='h-6 w-6 text-emerald-400'/>
                    )}
                </div>

                <div className=''>
                    {doctor.description}
                </div>
            </div>
        </CardContent>

    </Card>
  )
}

export default DoctorCard