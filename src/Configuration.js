import { prowPopup } from './Popups'
import { prowStyle } from './Styles'

const Configuration = {
    Map: {
        StartingLatLng: [53.3915, -2.125143],
        StartingZoom: 12,
        FullscreenControl: true,
        DisplayLayerControls: true,
        DisplayGrayScale: true,
        DisplayStreets: true,
        EnableAddressSearch: true
    },
    DynamicData: 
    [
        {
            key: 'Public Rights of Way',
            url: 'http://scnmapsrv.stockport.gov.uk:8080/geoserver/wfs?service=WFS&version=1.1.0&request=GetFeature&typeName=highways:public_rights_of_way&outputFormat=application/json&bbox={0},EPSG:4326&srsName=EPSG:4326',
            layerOptions: {
                onEachFeature: prowPopup,
                maxZoom: 2,
                style: prowStyle
            },
            displayOverlay: true,
            visibleByDefault: true 
        },
        {
            key: 'os1250_line',
            url: 'http://scnmapsrv.stockport.gov.uk:8080/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 19,
                layers: 'base_maps:os1250_line',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true 
        },
        {
            key: 'os1250_text',
            url: 'http://scnmapsrv.stockport.gov.uk:8080/geoserver/wms?',
            layerOptions: {
                maxZoom: 20,
                minZoom: 19,
                layers: 'base_maps:os1250_text',
                format: 'image/png',
                transparent: true
            },
            displayOverlay: false,
            visibleByDefault: true 
        }
    ],
    StaticData: 
    [
        {
            key: 'boundary',
            url: 'http://spatialgeojson.s3-eu-west-1.amazonaws.com/webmapping/boundary.geojson',
            layerOptions: {
                interactive: false,
                maxZoom: 9,
                style: {
                    color: '#000',
                    weight: 4,
                    opacity: 1,
                    fillColor: '#000',
                    fillOpacity: 0
                }
            }
        }
    ]
}

export default Configuration