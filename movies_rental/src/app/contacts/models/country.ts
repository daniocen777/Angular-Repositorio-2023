import { Flag } from "./flag";
import { LatLng } from "./latLng";
import { Translations } from "./translation";

export interface Country {
    name?: string;
    official_name?: string;
    alpha2Code?: string;
    alpha3Code?: string;
    cioc?: string;
    numericCode?: string;
    callingCode?: string;
    capital?: string;
    altSpellings?: string[];
    region?: string;
    subregion?: string;
    population?: number;
    latLng?: LatLng;
    area?: number;
    timezones?: string[];
    borders?: string[];
    translations?: Translations;
    flag?: Flag;
}