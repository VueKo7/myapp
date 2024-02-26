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
    
    const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=45.546253944571085&longitude=10.414666881415998&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,surface_pressure&timezone=GMT");
    const JSON_obj = await response.json();

    
    document.getElementById("temp_pv").innerHTML = JSON_obj["current"]["temperature_2m"];
    document.getElementById("tempPercepita_pv").innerHTML = JSON_obj["current"]["apparent_temperature"];
    document.getElementById("humidity_pv").innerHTML = JSON_obj["current"]["relative_humidity_2m"];
    document.getElementById("pressione_pv").innerHTML = JSON_obj["current"]["surface_pressure"];
}



  
