/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
"use strict";

const boxSize = 10;
const charWidth = 5;
const charHeight = 8;
const screenWidth = 64;
const screenHeight = 64;

const fileSelector = document.getElementById('file');
const allFormElements = document.querySelectorAll('form');
const allInputElements = document.querySelectorAll('input');
const brightnessSlider = document.getElementById('brightness');
const textPanelForm = document.getElementById('textPanelForm');
const bitmapPanelForm = document.getElementById('bitmapPanelForm');
const toScreenBufferButton = document.getElementById('toScreenBufferButton');

const getValue = (id) => document.getElementById(id).value;

const classicAdafruitFont = [
    0x00, 0x00, 0x00, 0x00, 0x00, 0x3E, 0x5B, 0x4F, 0x5B, 0x3E, 0x3E, 0x6B,
    0x4F, 0x6B, 0x3E, 0x1C, 0x3E, 0x7C, 0x3E, 0x1C, 0x18, 0x3C, 0x7E, 0x3C,
    0x18, 0x1C, 0x57, 0x7D, 0x57, 0x1C, 0x1C, 0x5E, 0x7F, 0x5E, 0x1C, 0x00,
    0x18, 0x3C, 0x18, 0x00, 0xFF, 0xE7, 0xC3, 0xE7, 0xFF, 0x00, 0x18, 0x24,
    0x18, 0x00, 0xFF, 0xE7, 0xDB, 0xE7, 0xFF, 0x30, 0x48, 0x3A, 0x06, 0x0E,
    0x26, 0x29, 0x79, 0x29, 0x26, 0x40, 0x7F, 0x05, 0x05, 0x07, 0x40, 0x7F,
    0x05, 0x25, 0x3F, 0x5A, 0x3C, 0xE7, 0x3C, 0x5A, 0x7F, 0x3E, 0x1C, 0x1C,
    0x08, 0x08, 0x1C, 0x1C, 0x3E, 0x7F, 0x14, 0x22, 0x7F, 0x22, 0x14, 0x5F,
    0x5F, 0x00, 0x5F, 0x5F, 0x06, 0x09, 0x7F, 0x01, 0x7F, 0x00, 0x66, 0x89,
    0x95, 0x6A, 0x60, 0x60, 0x60, 0x60, 0x60, 0x94, 0xA2, 0xFF, 0xA2, 0x94,
    0x08, 0x04, 0x7E, 0x04, 0x08, 0x10, 0x20, 0x7E, 0x20, 0x10, 0x08, 0x08,
    0x2A, 0x1C, 0x08, 0x08, 0x1C, 0x2A, 0x08, 0x08, 0x1E, 0x10, 0x10, 0x10,
    0x10, 0x0C, 0x1E, 0x0C, 0x1E, 0x0C, 0x30, 0x38, 0x3E, 0x38, 0x30, 0x06,
    0x0E, 0x3E, 0x0E, 0x06, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x5F,
    0x00, 0x00, 0x00, 0x07, 0x00, 0x07, 0x00, 0x14, 0x7F, 0x14, 0x7F, 0x14,
    0x24, 0x2A, 0x7F, 0x2A, 0x12, 0x23, 0x13, 0x08, 0x64, 0x62, 0x36, 0x49,
    0x56, 0x20, 0x50, 0x00, 0x08, 0x07, 0x03, 0x00, 0x00, 0x1C, 0x22, 0x41,
    0x00, 0x00, 0x41, 0x22, 0x1C, 0x00, 0x2A, 0x1C, 0x7F, 0x1C, 0x2A, 0x08,
    0x08, 0x3E, 0x08, 0x08, 0x00, 0x80, 0x70, 0x30, 0x00, 0x08, 0x08, 0x08,
    0x08, 0x08, 0x00, 0x00, 0x60, 0x60, 0x00, 0x20, 0x10, 0x08, 0x04, 0x02,
    0x3E, 0x51, 0x49, 0x45, 0x3E, 0x00, 0x42, 0x7F, 0x40, 0x00, 0x72, 0x49,
    0x49, 0x49, 0x46, 0x21, 0x41, 0x49, 0x4D, 0x33, 0x18, 0x14, 0x12, 0x7F,
    0x10, 0x27, 0x45, 0x45, 0x45, 0x39, 0x3C, 0x4A, 0x49, 0x49, 0x31, 0x41,
    0x21, 0x11, 0x09, 0x07, 0x36, 0x49, 0x49, 0x49, 0x36, 0x46, 0x49, 0x49,
    0x29, 0x1E, 0x00, 0x00, 0x14, 0x00, 0x00, 0x00, 0x40, 0x34, 0x00, 0x00,
    0x00, 0x08, 0x14, 0x22, 0x41, 0x14, 0x14, 0x14, 0x14, 0x14, 0x00, 0x41,
    0x22, 0x14, 0x08, 0x02, 0x01, 0x59, 0x09, 0x06, 0x3E, 0x41, 0x5D, 0x59,
    0x4E, 0x7C, 0x12, 0x11, 0x12, 0x7C, 0x7F, 0x49, 0x49, 0x49, 0x36, 0x3E,
    0x41, 0x41, 0x41, 0x22, 0x7F, 0x41, 0x41, 0x41, 0x3E, 0x7F, 0x49, 0x49,
    0x49, 0x41, 0x7F, 0x09, 0x09, 0x09, 0x01, 0x3E, 0x41, 0x41, 0x51, 0x73,
    0x7F, 0x08, 0x08, 0x08, 0x7F, 0x00, 0x41, 0x7F, 0x41, 0x00, 0x20, 0x40,
    0x41, 0x3F, 0x01, 0x7F, 0x08, 0x14, 0x22, 0x41, 0x7F, 0x40, 0x40, 0x40,
    0x40, 0x7F, 0x02, 0x1C, 0x02, 0x7F, 0x7F, 0x04, 0x08, 0x10, 0x7F, 0x3E,
    0x41, 0x41, 0x41, 0x3E, 0x7F, 0x09, 0x09, 0x09, 0x06, 0x3E, 0x41, 0x51,
    0x21, 0x5E, 0x7F, 0x09, 0x19, 0x29, 0x46, 0x26, 0x49, 0x49, 0x49, 0x32,
    0x03, 0x01, 0x7F, 0x01, 0x03, 0x3F, 0x40, 0x40, 0x40, 0x3F, 0x1F, 0x20,
    0x40, 0x20, 0x1F, 0x3F, 0x40, 0x38, 0x40, 0x3F, 0x63, 0x14, 0x08, 0x14,
    0x63, 0x03, 0x04, 0x78, 0x04, 0x03, 0x61, 0x59, 0x49, 0x4D, 0x43, 0x00,
    0x7F, 0x41, 0x41, 0x41, 0x02, 0x04, 0x08, 0x10, 0x20, 0x00, 0x41, 0x41,
    0x41, 0x7F, 0x04, 0x02, 0x01, 0x02, 0x04, 0x40, 0x40, 0x40, 0x40, 0x40,
    0x00, 0x03, 0x07, 0x08, 0x00, 0x20, 0x54, 0x54, 0x78, 0x40, 0x7F, 0x28,
    0x44, 0x44, 0x38, 0x38, 0x44, 0x44, 0x44, 0x28, 0x38, 0x44, 0x44, 0x28,
    0x7F, 0x38, 0x54, 0x54, 0x54, 0x18, 0x00, 0x08, 0x7E, 0x09, 0x02, 0x18,
    0xA4, 0xA4, 0x9C, 0x78, 0x7F, 0x08, 0x04, 0x04, 0x78, 0x00, 0x44, 0x7D,
    0x40, 0x00, 0x20, 0x40, 0x40, 0x3D, 0x00, 0x7F, 0x10, 0x28, 0x44, 0x00,
    0x00, 0x41, 0x7F, 0x40, 0x00, 0x7C, 0x04, 0x78, 0x04, 0x78, 0x7C, 0x08,
    0x04, 0x04, 0x78, 0x38, 0x44, 0x44, 0x44, 0x38, 0xFC, 0x18, 0x24, 0x24,
    0x18, 0x18, 0x24, 0x24, 0x18, 0xFC, 0x7C, 0x08, 0x04, 0x04, 0x08, 0x48,
    0x54, 0x54, 0x54, 0x24, 0x04, 0x04, 0x3F, 0x44, 0x24, 0x3C, 0x40, 0x40,
    0x20, 0x7C, 0x1C, 0x20, 0x40, 0x20, 0x1C, 0x3C, 0x40, 0x30, 0x40, 0x3C,
    0x44, 0x28, 0x10, 0x28, 0x44, 0x4C, 0x90, 0x90, 0x90, 0x7C, 0x44, 0x64,
    0x54, 0x4C, 0x44, 0x00, 0x08, 0x36, 0x41, 0x00, 0x00, 0x00, 0x77, 0x00,
    0x00, 0x00, 0x41, 0x36, 0x08, 0x00, 0x02, 0x01, 0x02, 0x04, 0x02, 0x3C,
    0x26, 0x23, 0x26, 0x3C, 0x1E, 0xA1, 0xA1, 0x61, 0x12, 0x3A, 0x40, 0x40,
    0x20, 0x7A, 0x38, 0x54, 0x54, 0x55, 0x59, 0x21, 0x55, 0x55, 0x79, 0x41,
    0x22, 0x54, 0x54, 0x78, 0x42, // a-umlaut
    0x21, 0x55, 0x54, 0x78, 0x40, 0x20, 0x54, 0x55, 0x79, 0x40, 0x0C, 0x1E,
    0x52, 0x72, 0x12, 0x39, 0x55, 0x55, 0x55, 0x59, 0x39, 0x54, 0x54, 0x54,
    0x59, 0x39, 0x55, 0x54, 0x54, 0x58, 0x00, 0x00, 0x45, 0x7C, 0x41, 0x00,
    0x02, 0x45, 0x7D, 0x42, 0x00, 0x01, 0x45, 0x7C, 0x40, 0x7D, 0x12, 0x11,
    0x12, 0x7D, // A-umlaut
    0xF0, 0x28, 0x25, 0x28, 0xF0, 0x7C, 0x54, 0x55, 0x45, 0x00, 0x20, 0x54,
    0x54, 0x7C, 0x54, 0x7C, 0x0A, 0x09, 0x7F, 0x49, 0x32, 0x49, 0x49, 0x49,
    0x32, 0x3A, 0x44, 0x44, 0x44, 0x3A, // o-umlaut
    0x32, 0x4A, 0x48, 0x48, 0x30, 0x3A, 0x41, 0x41, 0x21, 0x7A, 0x3A, 0x42,
    0x40, 0x20, 0x78, 0x00, 0x9D, 0xA0, 0xA0, 0x7D, 0x3D, 0x42, 0x42, 0x42,
    0x3D, // O-umlaut
    0x3D, 0x40, 0x40, 0x40, 0x3D, 0x3C, 0x24, 0xFF, 0x24, 0x24, 0x48, 0x7E,
    0x49, 0x43, 0x66, 0x2B, 0x2F, 0xFC, 0x2F, 0x2B, 0xFF, 0x09, 0x29, 0xF6,
    0x20, 0xC0, 0x88, 0x7E, 0x09, 0x03, 0x20, 0x54, 0x54, 0x79, 0x41, 0x00,
    0x00, 0x44, 0x7D, 0x41, 0x30, 0x48, 0x48, 0x4A, 0x32, 0x38, 0x40, 0x40,
    0x22, 0x7A, 0x00, 0x7A, 0x0A, 0x0A, 0x72, 0x7D, 0x0D, 0x19, 0x31, 0x7D,
    0x26, 0x29, 0x29, 0x2F, 0x28, 0x26, 0x29, 0x29, 0x29, 0x26, 0x30, 0x48,
    0x4D, 0x40, 0x20, 0x38, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08, 0x08,
    0x38, 0x2F, 0x10, 0xC8, 0xAC, 0xBA, 0x2F, 0x10, 0x28, 0x34, 0xFA, 0x00,
    0x00, 0x7B, 0x00, 0x00, 0x08, 0x14, 0x2A, 0x14, 0x22, 0x22, 0x14, 0x2A,
    0x14, 0x08, 0x55, 0x00, 0x55, 0x00, 0x55, // #176 (25% block) missing in old
                                              // code
    0xAA, 0x55, 0xAA, 0x55, 0xAA,             // 50% block
    0xFF, 0x55, 0xFF, 0x55, 0xFF,             // 75% block
    0x00, 0x00, 0x00, 0xFF, 0x00, 0x10, 0x10, 0x10, 0xFF, 0x00, 0x14, 0x14,
    0x14, 0xFF, 0x00, 0x10, 0x10, 0xFF, 0x00, 0xFF, 0x10, 0x10, 0xF0, 0x10,
    0xF0, 0x14, 0x14, 0x14, 0xFC, 0x00, 0x14, 0x14, 0xF7, 0x00, 0xFF, 0x00,
    0x00, 0xFF, 0x00, 0xFF, 0x14, 0x14, 0xF4, 0x04, 0xFC, 0x14, 0x14, 0x17,
    0x10, 0x1F, 0x10, 0x10, 0x1F, 0x10, 0x1F, 0x14, 0x14, 0x14, 0x1F, 0x00,
    0x10, 0x10, 0x10, 0xF0, 0x00, 0x00, 0x00, 0x00, 0x1F, 0x10, 0x10, 0x10,
    0x10, 0x1F, 0x10, 0x10, 0x10, 0x10, 0xF0, 0x10, 0x00, 0x00, 0x00, 0xFF,
    0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0x10, 0xFF, 0x10, 0x00,
    0x00, 0x00, 0xFF, 0x14, 0x00, 0x00, 0xFF, 0x00, 0xFF, 0x00, 0x00, 0x1F,
    0x10, 0x17, 0x00, 0x00, 0xFC, 0x04, 0xF4, 0x14, 0x14, 0x17, 0x10, 0x17,
    0x14, 0x14, 0xF4, 0x04, 0xF4, 0x00, 0x00, 0xFF, 0x00, 0xF7, 0x14, 0x14,
    0x14, 0x14, 0x14, 0x14, 0x14, 0xF7, 0x00, 0xF7, 0x14, 0x14, 0x14, 0x17,
    0x14, 0x10, 0x10, 0x1F, 0x10, 0x1F, 0x14, 0x14, 0x14, 0xF4, 0x14, 0x10,
    0x10, 0xF0, 0x10, 0xF0, 0x00, 0x00, 0x1F, 0x10, 0x1F, 0x00, 0x00, 0x00,
    0x1F, 0x14, 0x00, 0x00, 0x00, 0xFC, 0x14, 0x00, 0x00, 0xF0, 0x10, 0xF0,
    0x10, 0x10, 0xFF, 0x10, 0xFF, 0x14, 0x14, 0x14, 0xFF, 0x14, 0x10, 0x10,
    0x10, 0x1F, 0x00, 0x00, 0x00, 0x00, 0xF0, 0x10, 0xFF, 0xFF, 0xFF, 0xFF,
    0xFF, 0xF0, 0xF0, 0xF0, 0xF0, 0xF0, 0xFF, 0xFF, 0xFF, 0x00, 0x00, 0x00,
    0x00, 0x00, 0xFF, 0xFF, 0x0F, 0x0F, 0x0F, 0x0F, 0x0F, 0x38, 0x44, 0x44,
    0x38, 0x44, 0xFC, 0x4A, 0x4A, 0x4A, 0x34, // sharp-s or beta
    0x7E, 0x02, 0x02, 0x06, 0x06, 0x02, 0x7E, 0x02, 0x7E, 0x02, 0x63, 0x55,
    0x49, 0x41, 0x63, 0x38, 0x44, 0x44, 0x3C, 0x04, 0x40, 0x7E, 0x20, 0x1E,
    0x20, 0x06, 0x02, 0x7E, 0x02, 0x02, 0x99, 0xA5, 0xE7, 0xA5, 0x99, 0x1C,
    0x2A, 0x49, 0x2A, 0x1C, 0x4C, 0x72, 0x01, 0x72, 0x4C, 0x30, 0x4A, 0x4D,
    0x4D, 0x30, 0x30, 0x48, 0x78, 0x48, 0x30, 0xBC, 0x62, 0x5A, 0x46, 0x3D,
    0x3E, 0x49, 0x49, 0x49, 0x00, 0x7E, 0x01, 0x01, 0x01, 0x7E, 0x2A, 0x2A,
    0x2A, 0x2A, 0x2A, 0x44, 0x44, 0x5F, 0x44, 0x44, 0x40, 0x51, 0x4A, 0x44,
    0x40, 0x40, 0x44, 0x4A, 0x51, 0x40, 0x00, 0x00, 0xFF, 0x01, 0x03, 0xE0,
    0x80, 0xFF, 0x00, 0x00, 0x08, 0x08, 0x6B, 0x6B, 0x08, 0x36, 0x12, 0x36,
    0x24, 0x36, 0x06, 0x0F, 0x09, 0x0F, 0x06, 0x00, 0x00, 0x18, 0x18, 0x00,
    0x00, 0x00, 0x10, 0x10, 0x00, 0x30, 0x40, 0xFF, 0x01, 0x01, 0x00, 0x1F,
    0x01, 0x01, 0x1E, 0x00, 0x19, 0x1D, 0x17, 0x12, 0x00, 0x3C, 0x3C, 0x3C,
    0x3C, 0x00, 0x00, 0x00, 0x00, 0x00 // #255 NBSP
];

let grid;
let storage;
let displayDevice;
let displayNetwork;
let displayTextValue;
let screenSizeImageBlob;
let displayRgbBitmapValue;
let displayBrightnessValue;
//let displayMonoBitmapValue; //unused xbitmap value
let screenBuffer = new Uint8ClampedArray(screenHeight * screenWidth * 4);

const getTextInputData =() =>
({
    x: parseInt(getValue("textXPos")),
    y: parseInt(getValue("textYPos")),
    w: parseInt(getValue("canvasWidth")),
    h: parseInt(getValue("canvasHeight")),
    tColor: getValue("textColor"),
    bColor: getValue("backgroundColor"),
    tSize: parseInt(getValue("tSize")),
    text: getValue("textInput"),
    drawBG: document.getElementById("backgroundColorCheckbox").checked,
});

function getBitmapInputSettings() 
{
    return {
        x: parseInt(getValue("bitmapXPos")),
        y: parseInt(getValue("bitmapYPos")),
        w: parseInt(getValue("bitmapWidth")),
        h: parseInt(getValue("bitmapHeight")),
        color: "0xffff",
        bColor: "0",
    }
}

const getBitmapInputData = (bitmap) =>
({
    ...getBitmapInputSettings(),
    bitmap,
});

async function getValues()
{
    displayNetwork = await Wappsto.Network.findByName("Display 64x64");
    displayDevice = displayNetwork[0].findDeviceByName("Display");
    displayTextValue = displayDevice[0].findValueByName("Text input");
    displayBrightnessValue = displayDevice[0].findValueByName("Brightness");
    displayRgbBitmapValue = displayDevice[0].findValueByName("RGB565 Bitmap");
    //displayMonoBitmapValue = displayDevice[0].findValueByName("Mono Bitmap");

    storage = await Wappsto.wappStorage();

    brightnessSlider.value = displayBrightnessValue[0].getReportData();

    displayRgbBitmapValue[0].onReport((value, data, timestamp) =>
    {
        console.log("Got a report:",data,timestamp);
    })
}
// Preventing number input fields from changing values on scroll
allInputElements.forEach((e) =>
{
    e.addEventListener('wheel', (e) =>
    {
        e.preventDefault();
    });
})
// Preventing Forms from submitting on 'Enter' keypress and allowing newlines in "textInput" element
allFormElements.forEach((e) => 
{
    e.addEventListener('keydown', (e) => 
    {
        if (e.key === 'Enter' && e.target !== document.getElementById("textInput")) 
        {
            e.preventDefault();
        }
    });
});

toScreenBufferButton.addEventListener('click', async () =>
{
    const imageData = await resizeImage(screenSizeImageBlob);
    toScreenBuffer(imageData);

    drawRGBBitmap({x:0,y:0,bitmap:screenBuffer,w:64,h:64}); // drawing screen buffer
    drawText(getTextInputData());                           // then text on top
})

bitmapPanelForm.addEventListener('change', async () =>
{
    if(screenSizeImageBlob) //convert preview image only if image has already been loaded
    {
        const imageData = await resizeImage(screenSizeImageBlob);

        drawRGBBitmap({x:0,y:0,bitmap:screenBuffer,w:64,h:64}); // drawing screen buffer first
        drawRGBBitmap(getBitmapInputData(imageData.data));      // then current image preview
        drawText(getTextInputData());                           // then text
    }
});
// Draw text on change in text area elements
textPanelForm.addEventListener('input', async () => 
{
    if(screenSizeImageBlob) //convert preview image only if image has already been loaded
    {
        const imageData = await resizeImage(screenSizeImageBlob);

        drawRGBBitmap({x:0,y:0,bitmap:screenBuffer,w:64,h:64});
        drawRGBBitmap(getBitmapInputData(imageData.data));
    }
    else
    {
        //TO DO: clear last text area, properly...
        const {x,y,w,h} = getTextInputData();
        const x_1 = x < 1 ? x : x -1;
        const y_1 = y < 1 ? y : y -1;
        const w2 = w + 2;
        const h2 = h + 2;
        fillRect(x_1,y_1,w2,h2,0);
    }
    drawText(getTextInputData());
});

brightnessSlider.addEventListener('change', () =>
{
    brightnessControl();
});

fileSelector.addEventListener('change', async () =>
{
    const file = fileSelector.files[0];
    const fileReader = new FileReader();

    fileReader.readAsArrayBuffer(file);
    fileReader.onload = async function(e)
    {
        const inputImageArrayBuffer = e.target.result;
        const inputImageBlob = new Blob([inputImageArrayBuffer]);
        screenSizeImageBlob = await resizeImageToScreenBlob(inputImageBlob); // screen sized image as reference for futher resizing
        const imageData = await resizeImage(screenSizeImageBlob);            // resizing reference to specified  dimensions

        drawRGBBitmap(getBitmapInputData(imageData.data));                   // drawing resized image
        drawText(getTextInputData());                                        // drawing text
    }
});
/**
 * Resizes image Blob to defined dimensions in Image settings
 * @param {Blob} inputImageBlob 
 * @returns imageData
 */
async function resizeImage(inputImageBlob)
{
    const bitmapSettings = getBitmapInputSettings();

    const targetWidth = bitmapSettings.w;
    const targetHeight = bitmapSettings.h;

    const offscreen = new OffscreenCanvas(screenWidth,screenHeight);
    const ctx = offscreen.getContext("2d");

    const targetSizeBitmap = await createImageBitmap(inputImageBlob, 
    {
        resizeWidth: targetWidth,
        resizeHeight: targetHeight,
        resizeQuality: "medium",
    });

    ctx.drawImage(targetSizeBitmap, 0, 0);
    const imageData = ctx.getImageData(0, 0, targetWidth, targetHeight);

    return imageData;
}
/**
 * Resizes image Blob to screen dimensions
 * @param {Blob} inputImageBlob 
 * @returns image Blob
 */
async function resizeImageToScreenBlob(inputImageBlob) 
{
    const offscreen = new OffscreenCanvas(screenWidth, screenHeight);
    const ctx = offscreen.getContext("2d");
  
    const screenSizeBitmap = await createImageBitmap(inputImageBlob, 
    {
      resizeWidth: screenWidth,
      resizeHeight: screenHeight,
      resizeQuality: "medium",
    });
  
    ctx.drawImage(screenSizeBitmap, 0, 0, screenWidth, screenHeight);
  
    const blob = await offscreen.convertToBlob(
    {
      type: 'image/bmp',
      quality: 1
    });
  
    return blob;
}
/**
 * Puts imageData in to screenBuffer.
 * Crops the imageData if image is getting out of bounds.
 * @param {ImageData} imageData 
 */
function toScreenBuffer(imageData)
{
    const {x,y,w,h} = getBitmapInputSettings();
    const imageBuffer = new Uint8ClampedArray(w * h * 4);
    let imageWidth = w;
    let imageHeight = h;
    //console.log("Input buffer length",imageBuffer.length,"x",x,"y",y,"width",w,"height",h);
    imageBuffer.set(imageData.data);

    if(x + w > screenWidth)
    {
        imageWidth = screenWidth - x;
    }

    if(y + h > screenHeight)
    {
        imageHeight = screenHeight - y;
    }

    for(let i = 0; i < imageHeight; i++)
    {
        for(let j = 0; j < imageWidth; j++)
        {
            const index = (i * w + j) * 4;
            const screenBufferIndex = ((y + i) * screenWidth + x + j) * 4;

            screenBuffer.set(imageBuffer.subarray(index, index + 4), screenBufferIndex);
        }
    }
}
/**
 * Creates a file from screenBuffer data
 * @returns RGB565 Image
 */
function bitmapToFile()
{
    const rgbBitmapData = convertRGBAtoRGB(screenBuffer);
    const rgb565Bitmap = convertBitmapTo16bit(rgbBitmapData);

    const outputImageBlob = new Blob([rgb565Bitmap]);
    const outputImage = new File([outputImageBlob], "output.bmp",{type:'image/bmp'});

    return outputImage;
}
/**
 * Converts ImageData from RGBA to RGB values by premultiplying alpha
 * @param {ImageData} imageData RGBA values
 * @returns RGB888
 */
function convertRGBAtoRGB(imageData)
{
    const bitmapDataRgb = new Uint8ClampedArray(Math.ceil(imageData.length / 4) * 3);
    let j = 0;
    for(let i = 0; i < imageData.length; i += 4) 
    {
      const r = imageData[i];
      const g = imageData[i + 1];
      const b = imageData[i + 2];

      const alpha = imageData[i + 3] / 255;
      // Premultiplying alpha with "black" color as background. Use (1 - alpha) * 255) for white.
      bitmapDataRgb[j]     = Math.round((1 - alpha) * 0) + (alpha * r);
      bitmapDataRgb[j + 1] = Math.round((1 - alpha) * 0) + (alpha * g);
      bitmapDataRgb[j + 2] = Math.round((1 - alpha) * 0) + (alpha * b);

      j += 3
    }
    return bitmapDataRgb;
}
/**
 * Converts RGB888 image data to RGB565
 * @param {Uint8ClampedArray} bitmapDataRgb RGB888 image data 
 * @returns RGB565 image data
 */
function convertBitmapTo16bit(bitmapDataRgb)
{
    const rgb565Bitmap = new Uint16Array(Math.ceil(bitmapDataRgb.length / 3));
    let j = 0;
    for(let i = 0; i < bitmapDataRgb.length; i += 3) 
    {
      const r = bitmapDataRgb[i];
      const g = bitmapDataRgb[i + 1];
      const b = bitmapDataRgb[i + 2];
  
      const color24 = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
      const rgb565 = convert24to16(color24);
  
      rgb565Bitmap[j++] = parseInt(rgb565,16);  
    }
    return rgb565Bitmap;
}
/**
 * Converts RGB color depth from 888 to 565
 * @param {*} color24 RGB888 color
 * @returns RGB565 color
 */
function convert24to16(color24)
{
    const r = parseInt(color24.slice(1, 3), 16);
    const g = parseInt(color24.slice(3, 5), 16);
    const b = parseInt(color24.slice(5, 7), 16);

    const r5 = Math.round((r / 255) * 31);
    const g6 = Math.round((g / 255) * 63);
    const b5 = Math.round((b / 255) * 31);

    let color565 = (r5 << 11) | (g6 << 5) | b5;

    color565 ="0x"+color565.toString(16).toUpperCase().padStart(4, '0');

    return color565;
}
/**
 * Converts RGB color depth from 565 to 888
 * @param {*} color16 RGB565 color
 * @returns RGB888 color
 */
function convert16to24(color16) 
{
    let r5 = (color16 & 0b1111100000000000) >> 11;
    let g6 = (color16 & 0b0000011111100000) >> 5;
    let b5 =  color16 & 0b0000000000011111;

    let r8 = Math.floor(r5 * 255 / 31 + 0.5);
    let g8 = Math.floor(g6 * 255 / 63 + 0.5);
    let b8 = Math.floor(b5 * 255 / 31 + 0.5);
    return `#${(r8 << 16 | g8 << 8 | b8).toString(16).padStart(6, "0")}`;
}

function sendTextToScreen(object)
{
  let config = {
    ...object,
    tColor:convert24to16(object.tColor),
    bColor:convert24to16(object.bColor),
  };

  displayTextValue[0].control(JSON.stringify(config));
}
/**
 * Sends contents of screen buffer as a .bmp image to 
 * WepApp storage and creates an URL to the image.
 * 
 * Sends JSON config to the "displayRgbBitmapValue" with 
 * bitmap as URL placed at x=0,y=0 and dimensions of the whole screen.
 * 
 * Previously uploaded file to the WebApps storage will 
 * be overwritten.
 */
async function sendBitmapToScreen()
{
    let imageID;
    let data = storage.get("imageID");
    const sessionID = Wappsto.session;

    if(data == undefined)
    {
        imageID = await createFileOnWebApp("img", bitmapToFile());
        await storage.set("imageID",imageID);       
    }
    else
    {
        imageID = data;
        await updateFileOnWebApp(imageID, bitmapToFile());
    }

    const bitmapUrl = `https://wappsto.com/services/2.1/file/${imageID}?X-session=${sessionID}`;

    const jsonObject = JSON.stringify({x:0,y:0,w:screenWidth,h:screenHeight,bitmap:bitmapUrl});

    displayRgbBitmapValue[0].control(jsonObject);
}

async function createFileOnWebApp(file_name, raw_data)
{
    const data = new FormData();
    data.append(file_name, raw_data);

    const rsp = await Wappsto.request.post(
        '/2.1/file',
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });

    return rsp.data.meta.id;
}

async function updateFileOnWebApp(file_id, raw_data)
{
    const data = new FormData();
    data.append(file_id, raw_data);
    
    await Wappsto.request.put(
        `/2.1/file/${file_id}`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
}

function brightnessControl()
{
    displayBrightnessValue[0].control(brightnessSlider.value);
}

function setup()
{
    let canvas = createCanvas(screenWidth * boxSize, screenHeight * boxSize);
    canvas.parent('canvas-holder');
    canvas.style.display = 'block';

    const cols = Math.floor(screenWidth);
    const rows = Math.floor(screenHeight);
    grid = new Array(cols);
  
    for (let i = 0; i < cols; i++)
    {
      grid[i] = new Array(rows);
    }
  
    for (let y = 0; y < cols; y++) 
    {
      for (let x = 0; x < rows; x++) 
      {
        drawPixel(x,y,0);
      }
    }
}

class Pixel
{
    constructor(x, y, c) 
    {
        this.show = function () 
        {
            fill(c); //add ',0' for full transperency
            stroke(40); //pixel border color
            rect(x * boxSize, y * boxSize, boxSize, boxSize);
        };
    }
}

function drawPixel(x,y,c)
{
    if(x < screenWidth && y < screenHeight)
    {
        grid[y][x] = new Pixel(x, y, c);
        grid[y][x].show(); 
    }
}

function fillRect(x,y,w,h,c)
{
    for(let i = x; i <x+w; i++)
    {
        for(let j = y; j <y+h; j++)
        {
            drawPixel(i,j,c);
        }
    }
}
/**
 * Clears preview screen and 
 * empties the screenBuffer
 */
function fillScreen()
{
    screenBuffer.fill(0);
    fillRect(0,0,screenWidth,screenHeight,0);
}
/**
 * Clears LED matrix by sending empty text
 * rectangle filled with black background
 */
function clearScreen()
{
    let scrnClr = {
        x: 0,
        y: 0,
        w: screenWidth,
        h: screenHeight,
        tColor: "0",
        bColor: "0",
        tSize: 1,
        text: "",
        drawBG: true,
    }

    displayTextValue[0].control(JSON.stringify(scrnClr));
}

function drawChar(char, x, y, tSize, c)
{
    if (char === undefined || char === null) {
        console.error("Invalid value for 'char' parameter", char);
        return;
    }
    
    let index = char.charCodeAt(0);

    for(let i = 0; i < charWidth; i++)
    {
        let chr = classicAdafruitFont[index * 5 + i];
        for(let j = 0; j < charHeight; j++, chr >>= 1)
        {
            if(chr & 1)
            {
                if(tSize === 1)
                {
                    drawPixel(x+i,y+j, c);
                }

                fillRect(x+(i*tSize),y+(j*tSize), tSize, tSize, c);
            }
        }
    }
}

function drawText({x=0,y=0,text="",w=0,h=0,tColor=0,bColor=0,tSize=1,drawBG=true})
{
    if(drawBG)
    {
        fillRect(x,y,w,h,bColor); //filling the text area with background color
    }

    let charArray = text.split('');
    let lineCharLimit = Math.floor((w / (charWidth + 1)) / tSize); //maximum number of characters on the line
    let startXPos = x;
    let startYPos = y;
    let charCount = 0;

    for(const i of charArray)
    {
        //make new line if current char count exeeds line limit OR if current char is a newline
        if(charCount === lineCharLimit || i === '\n')
        {
            y+=charHeight * tSize;
            x=startXPos;
            charCount = 0;
            
            if(i === '\n') //skip the loop to not draw blank space on newline char
            {
                continue;
            }
        }
        //if y out of bounds either on the screen height OR in the smaller canvas, break
        if(y > (screenHeight - (charHeight*tSize)) || 
           !((y + (charHeight * tSize)) <= (h + startYPos)))
        {
            console.log("Out of bounds, y:",y);
            break;
        }

        drawChar(i,x,y,tSize,tColor);
        charCount++;
        x+=(charWidth+1) * tSize;

        console.log("x",x,"y:",y,"Start x:", startXPos,"Line char limit",lineCharLimit,"Char written:", i);
    }
}

function drawXBitmap({x=0,y=0,bitmap,w=64,h=64,c=255})
{
    const byteWidth = Math.floor((w + 7) / 8);
    let b = new Uint8ClampedArray(bitmap.length);
    
    for(let j = 0; j < h; j++, y++)
    {
        for(let i = 0; i < w; i++)
        {
            if(i & 7)
            {
                b >>= 1;
            }
            else
            {  
                b = bitmap[j * byteWidth + Math.floor(i / 8)];
            }
            if(b & 0x01)
            {
                drawPixel(x + i, y, c)
                console.log("x:", x + i, "y:",y, "data:", b.toString(2));
            }
        }
    }
}
/**
 * Clears area under the image to remove "trailing" pixels
 * then draws the image using RGBA values.
 * @param {object} object with bitmap settings and bitmap data 
 */
function drawRGBBitmap({x=0,y=0,bitmap,w=0,h=0})
{
    fillRect(x,y,w,h,0,);

    for(let j = 0; j < h; j++, y++)
    {
        for(let i = 0; i < w; i++)
        {
            const index = (j * w + i) * 4;

            const r = bitmap[index];
            const g = bitmap[index + 1];
            const b = bitmap[index + 2];
            const a = bitmap[index + 3];

            drawPixel(x + i, y, color(r, g, b, a));
        }
    }
}
/**
 * Draws already converted RGB565 bitmap by converting 
 * colors back to RGB888.
 * 
 * @param {object} bitmap settings 
 */
function drawRGB565Bitmap({x=0,y=0,bitmap,w=0,h=0})
{
    for(let j = 0; j < h; j++, y++)
    {
        for(let i = 0; i < w; i++)
        {
            drawPixel(x + i, y, convert16to24(bitmap[j * w + i]));
        }
    }
}