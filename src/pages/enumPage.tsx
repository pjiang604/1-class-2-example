import { useState } from "react"

enum CarStatus {
    //DO NOT put this enum in your typics.d.ts file. 
    //Just put it on the page you want to use it. 
    Sold = 'SOLD',
    Available = 'AVAILABLE',
    Pending = 'PENDING'
}

export default function enumPage() {

    const [currentCar, setCurrentCar] = useState(CarStatus.Sold)

    return (
        <>
            <div>
                {
                    CarStatus.Sold && <p>Sold</p>
                }
                {
                    CarStatus.Pending && <p>Pending</p>
                }
                {
                    CarStatus.Available && <p>Available</p>
                }

                <h2>More logic here</h2>
                {currentCar === CarStatus.Sold && <p>The car has been sold</p>}
                {currentCar === CarStatus.Pending && <p>The car is pending</p>}
                {currentCar === CarStatus.Available && <p>The car is available</p>}
            </div>
        </>
    )
}