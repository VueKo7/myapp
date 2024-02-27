/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);


function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}


async function meteoPV() {
    
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=42.8333&longitude=12.8333&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&daily=temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,precipitation_probability_max&timezone=auto");
    const JSON_obj = await response.json();

    
    document.getElementById("temp_pv").innerHTML = JSON_obj["current"]["temperature_2m"] + JSON_obj["current_units"]["temperature_2m"];
    document.getElementById("tempPercepita_pv").innerHTML = JSON_obj["current"]["apparent_temperature"] + JSON_obj["current_units"]["temperature_2m"];
    document.getElementById("humidity_pv").innerHTML = JSON_obj["current"]["relative_humidity_2m"] + JSON_obj["current_units"]["relative_humidity_2m"];
    document.getElementById("pressione_pv").innerHTML = JSON_obj["current"]["surface_pressure"] + JSON_obj["current_units"]["surface_pressure"];

}




  
