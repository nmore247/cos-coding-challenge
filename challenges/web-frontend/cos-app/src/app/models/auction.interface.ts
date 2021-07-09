
export interface IAuction {
    label: string,
    associatedVehicle: {
      make: string,
      model: string,
      vehicleImages: [
        {
          uuid: string,
          rawData: string,
          url: string,
          _fk_uuid_vehicle: string,
          _fk_uuid_highestBiddingBuyerUser: string,
          perspective: number,
          encoding: string,
          mimeType: string,
          createdAt: Date,
          updatedAt: Date
        }
      ],
      mileageInKm: number,
      category: number,
      fuelType: number,
      transmission: number,
      ez: Date,
    },
    endingTime: Date,
    remainingTimeInSeconds: number,
    currentHighestBidValue: number
}

