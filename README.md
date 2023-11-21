# ISSTracker
International Space Station Tracker

<h2>Description</h2>

This website was created as part of the MITxEmeritus course, using the Mapbox API along with the "Where is the ISS at?" REST API.

<h2>How to Run</h2>

This project may be loaded in a browser once the user replaces 
// TODO: add your own access token
mapboxgl.accessToken = 'REPLACE_KEY';

in mapanimation.js

<h2>Roadmap of Future Improvements</h2>

The "Where is the ISS at?" REST API has the ability to pull the 10 most recent positions of the ISS. Combining this with new data going forward, it would be feasible to add "breadcrumbs" to the ISS' position, showing how it orbits the Earth in real time. It would also be posibile to use the direction, heading, and velocity values returned by the API to estimate the trajectory. Changing the Map to a 3D globe would also be another option to track the position.

<h2>Support</h2>

Please contact hillary.poe@outlook.com for support questions.

<h2>License</h2>

MIT License

Copyright (c) 2023 Hillary Poe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
