import React from 'react'
import { Card, CardContent } from './ui/card'
import { Calendar, User } from 'lucide-react'
import { Button } from './ui/button'
import Link from 'next/link'

function DoctorCard({ doctor }) {
    return (
        <Card className="border-emerald-900/20 hover:border-emerald-600 transition-all">
            <CardContent>
                <div>
                    <div className='w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center flex-shrink-0'>
                        {doctor.imageUrl ? (
                            <img src={doctor.imageUrl} className='w-12 h-12 rounded-full object-cover' />
                        ) : (
                            <User className='h-6 w-6 text-emerald-400' />
                        )}
                    </div>

                    <p className='text-sm text-muted-foreground mb-1'>
                        {doctor.speciality}.{doctor.exprience} years exprience
                    </p>

                    <div className='mt-4 line-clamp-2 text-sm text-muted-foreground mb-4'>
                        {doctor.description}
                    </div>
                    <Button asChild className="w-full bg-emerald-500 hover:bg-emerald-600 mt-2" >
                        <Link href={`/doctors/${doctor.speciality}/${doctor.id}`}>
                            <Calendar className='h-4 w-4 mr-2' />
                            View Profile & Book
                        </Link>
                    </Button>
                </div>
            </CardContent>

        </Card>
    )
}

export default DoctorCard