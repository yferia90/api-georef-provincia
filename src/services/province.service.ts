import fetch from 'node-fetch';

const URL_PROVINCES = 'https://apis.datos.gob.ar/georef/api/provincias';

const validateProvince = async (province: string) => {
    try{
        const response = await fetch(`${URL_PROVINCES}?nombre=${province}`);
        const jsonResponse = response.json();
        return jsonResponse;
    }catch(err){
        return null;
    }
}

const getLatLongByProvince = (provincias: { centroide: any; }[]) => {
    const latlong = provincias[0].centroide;
    return latlong;
}

const getLatLongProvince = async (province: string) => {
    const valProvince = await validateProvince(province);
    if(valProvince!=null){
        const { total, provincias } = valProvince;
        let latLong;
        switch(total){
            case 1:
                latLong = getLatLongByProvince(provincias);
                break;
            case 0:
                latLong = "The province was not found";
                break;
            default:
                latLong = 'More than one province coincides with the indicated name';
                break;
        }
        return latLong;
    }
    return "The resource is currently unavailable";
}

export {
    getLatLongProvince
}