async function main()
{
    let displayNetwork = await Wappsto.Network.findByName("Display 64x64");
    let displayDevice = displayNetwork[0].findDeviceByName("Display");
    let displayMonoBitmapValue = displayDevice[0].findValueByName("Mono Bitmap");
    let displayRgbBitmapValue = displayDevice[0].findValueByName("RGB565 Bitmap");
    let displayBrightnessValue = displayDevice[0].findValueByName("Brightness");
    let displayTextValue = displayDevice[0].findValueByName("Text input");

    console.log(displayDevice, 
                displayMonoBitmapValue, 
                displayMonoBitmapValue, 
                displayRgbBitmapValue, 
                displayTextValue);

    if(displayDevice[0].isOnline())
    {
        console.log("Display is online");
    }

    let brightnessData = displayBrightnessValue[0].getControlData();
    let textData = displayTextValue[0].getControlData();

    console.log(brightnessData,textData);

}



