# DAT405-Data-Visualisation

This data visualisation project aims to identify the relative location of a searched postcode by using the https://postcodes.io API. When provided with a postcode, this Javascript requests the corresponding data from https://postcodes.io. The retuned array contains latitude and longitude values. These values are then mapped onto an image of the UK with close representation. Along with the "long" and "lat" values, the API returns other data about the corresponding postcode. Some of this data is then displayed to the right of the canvas.

Postcodes to consider searching include:
PL4 8AA -University of Plymouth
EX4 4QD -University of Exeter
BT7 1NN -Queen's University Belfast
G4 0BA -Glasgow Caledonian University
WC1E 7HU -University of London

Please note that the dataset collected from postcodes.io is not entirely complete for all returned fields in the array. Where a requested field (e.g. ward) is null/blank, the sentence will depict it as unavailable.

This project has taken influence from other online maps including DataShine.org.uk, Ause-emaps.com and shiny-apps.ceh.ac.uk/natures_postcode/. The above maps use data visualisation to compile information about an area to postcode level or at-least provide postcode search functionality. These projects have inspired this one because they are examples of highly developed code with numerous connections to online databases which compile the comprehensive systems of data.

Designed and built by Jake Warren, University of Plymouth.
