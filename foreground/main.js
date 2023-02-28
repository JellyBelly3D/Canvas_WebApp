const boxSize = 10;
const charWidth = 5;
const charHeight = 8;
const screenWidth = 64;
const screenHeight = 64;

const monoCat = new Uint8ClampedArray([
    0x00, 0x00, 0xFE, 0x1F, 0x00, 0x00, 0x00, 0x00, 0x00, 0xC0, 0xFF, 0x7F, 
    0x00, 0x00, 0x00, 0x00, 0x00, 0xF0, 0xFF, 0xFF, 0x01, 0x00, 0x00, 0x00, 
    0x00, 0xF8, 0xFF, 0xFF, 0x03, 0x00, 0x00, 0x00, 0x00, 0xFC, 0xFF, 0xFF, 
    0x07, 0x00, 0x00, 0x00, 0x00, 0xFE, 0x07, 0xF8, 0x07, 0x00, 0x00, 0x00, 
    0x00, 0xFE, 0x01, 0xE0, 0x0F, 0x00, 0x00, 0x00, 0x00, 0xFF, 0x00, 0xC0, 
    0x0F, 0x00, 0x00, 0x00, 0x00, 0x7F, 0x00, 0x80, 0x0F, 0x00, 0x00, 0x00, 
    0x80, 0x3F, 0x00, 0x06, 0x0F, 0x00, 0x00, 0x00, 0x80, 0x1F, 0xC0, 0x1F, 
    0x00, 0x00, 0x00, 0x00, 0x80, 0x1F, 0xF0, 0x1F, 0x00, 0x00, 0x00, 0x00, 
    0x80, 0x1F, 0xF8, 0x3F, 0x00, 0x00, 0x00, 0x00, 0x80, 0x1F, 0xFC, 0x7F, 
    0x00, 0x00, 0x00, 0x00, 0x80, 0x1F, 0xFE, 0xFF, 0x60, 0x00, 0x80, 0x00, 
    0x80, 0x1F, 0xFF, 0xFF, 0x70, 0x00, 0xC0, 0x00, 0x80, 0xBF, 0xFF, 0xFF, 
    0xF1, 0x00, 0xE0, 0x00, 0x80, 0xFF, 0xFF, 0xFF, 0xF9, 0x01, 0xF0, 0x01, 
    0x00, 0xFF, 0xFF, 0xFF, 0xF9, 0x01, 0xF8, 0x01, 0x00, 0xFF, 0xFF, 0xFF, 
    0xF9, 0xF3, 0xFC, 0x01, 0x00, 0xFE, 0xFF, 0xFF, 0xFD, 0xFF, 0xFF, 0x01, 
    0x00, 0xFC, 0xFF, 0xFF, 0xFD, 0xFF, 0xFF, 0x01, 0x00, 0xF8, 0xFF, 0xFF, 
    0xFD, 0xFF, 0xFF, 0x01, 0x00, 0xF8, 0xFF, 0xFF, 0xFD, 0xFF, 0xFF, 0x01, 
    0x00, 0xFC, 0xFF, 0xFF, 0xFD, 0xFF, 0xFF, 0x01, 0x00, 0xFC, 0xFF, 0xFF, 
    0xFD, 0xFF, 0xFF, 0x01, 0x00, 0xFC, 0xFF, 0xFF, 0xFD, 0xFF, 0xEF, 0x01, 
    0x00, 0xFC, 0xFF, 0xFF, 0xFD, 0xFD, 0xFF, 0x01, 0x00, 0xFE, 0xFF, 0xFF, 
    0xFD, 0xFF, 0xF5, 0x01, 0x00, 0xFE, 0xFF, 0xFF, 0xF9, 0xFF, 0xFF, 0x01, 
    0x00, 0xFE, 0xFF, 0xFF, 0xFB, 0xFF, 0xFF, 0x00, 0x00, 0xFE, 0xFF, 0xFF, 
    0xFB, 0xFF, 0xFF, 0x00, 0x00, 0xFE, 0xFF, 0xFF, 0xF7, 0xFF, 0xFF, 0x00, 
    0x00, 0xFE, 0xFF, 0xFF, 0xFF, 0xFF, 0x7F, 0x00, 0x00, 0xFE, 0xFF, 0xFF, 
    0xFF, 0xFF, 0x3F, 0x00, 0x00, 0xFE, 0x9F, 0xFF, 0xFF, 0xFF, 0x3F, 0x00, 
    0x00, 0xFE, 0x0F, 0xFF, 0xFF, 0xFF, 0x0F, 0x00, 0x00, 0xFE, 0x07, 0xFE, 
    0xFF, 0xFF, 0x07, 0x00, 0x00, 0xFE, 0x07, 0xFE, 0xFF, 0xFF, 0x01, 0x00, 
    0x00, 0xFE, 0x07, 0xFC, 0xFF, 0xFF, 0x01, 0x00, 0x00, 0xFE, 0x03, 0xFC, 
    0xFF, 0xFF, 0x01, 0x00, 0x00, 0xFE, 0x03, 0xFC, 0x9F, 0xFF, 0x01, 0x00, 
    0x00, 0xFE, 0x03, 0xFC, 0x0F, 0xFF, 0x01, 0x00, 0x00, 0xFE, 0x03, 0xFC, 
    0x0F, 0xFF, 0x01, 0x00, 0x00, 0xFC, 0x01, 0xFC, 0x0F, 0xFF, 0x01, 0x00, 
    0x00, 0xFC, 0x01, 0xFC, 0x07, 0xFE, 0x01, 0x00, 0x00, 0xFC, 0x01, 0xFC, 
    0x07, 0xFE, 0x01, 0x00, 0x00, 0xFC, 0x01, 0xF8, 0x07, 0xFE, 0x01, 0x00, 
    0x00, 0xFC, 0x01, 0xF8, 0x03, 0xFE, 0x01, 0x00, 0x00, 0xFC, 0x01, 0xF8, 
    0x03, 0xFE, 0x01, 0x00, 0x00, 0xFC, 0x00, 0xF8, 0x03, 0xFE, 0x00, 0x00, 
    0x00, 0xFC, 0x00, 0xF8, 0x03, 0xFE, 0x00, 0x00, 0x00, 0xFC, 0x00, 0xF8, 
    0x03, 0xFC, 0x00, 0x00, 0x00, 0xFC, 0x00, 0xF8, 0x01, 0xFC, 0x00, 0x00, 
    0x00, 0xFC, 0x00, 0xF8, 0x01, 0xFC, 0x00, 0x00, 0x00, 0xFC, 0x00, 0xF8, 
    0x01, 0xFC, 0x00, 0x00, 0x00, 0xFC, 0x00, 0xF8, 0x01, 0xFC, 0x00, 0x00, 
    0x00, 0xFC, 0x00, 0xF8, 0x01, 0xFC, 0x00, 0x00, 0x00, 0xFC, 0x00, 0xF8, 
    0x00, 0xFC, 0x00, 0x00, 0x00, 0x7C, 0x00, 0xF8, 0x00, 0xFC, 0x00, 0x00, 
    0x00, 0x7C, 0x00, 0xF8, 0x00, 0xFC, 0x00, 0x00, 0x00, 0x78, 0x00, 0xF8, 
    0x00, 0xFC, 0x00, 0x00, 0x00, 0x78, 0x00, 0xF8, 0x00, 0xF8, 0x00, 0x00, 
    0x00, 0x78, 0x00, 0x78, 0x00, 0xF8, 0x00, 0x00,]);

const lilIcon = new Uint8ClampedArray([
    0x07, 0xe0, 
    0x08, 0x10, 
    0x13, 0xc8, 
    0x24, 0x24, 
    0x49, 0x92, 
    0x92, 0x49,
    0xa4, 0x25, 
    0x01, 0x80, 
    0x03, 0xc0, 
    0x03, 0xc0, 
    0x01, 0x80, 
    0x00, 0x00
]);

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

let displayNetwork;
let displayDevice;
let displayMonoBitmapValue;
let displayRgbBitmapValue;
let displayTextValue;

const getValue = (id) => document.getElementById(id).value;

const textPanelForm = document.forms.textPanelForm;

const defaultConfig = {
    x: 0,//getValue("xPos"),
    y: 0,//getValue("yPos"),
    w: 0,//getValue("canvasWidth"),
    h: 0,//getValue("canvasHeight"),
};

const textInputConfig = {
    tColor: "0xffff",//getValue("textColor"),
    bColor: "0",//getValue("backgroundColor"),
    tSize:  1,//getValue("textSize"),
    text:   "",//getValue("textInput"),
}

const getTextInputElementData =() =>
({
    x: parseInt(getValue("xPos")),
    y: parseInt(getValue("yPos")),
    w: parseInt(getValue("canvasWidth")),
    h: parseInt(getValue("canvasHeight")),
    tColor: parseInt(getValue("textColor")),
    bColor: parseInt(getValue("backgroundColor")),
    tSize: parseInt(getValue("tSize")),
    text: getValue("textInput")
});

async function getValues()
{
    displayNetwork = await Wappsto.Network.findByName("Display 64x64");
    displayDevice = displayNetwork[0].findDeviceByName("Display");
    displayMonoBitmapValue = displayDevice[0].findValueByName("Mono Bitmap");
    displayRgbBitmapValue = displayDevice[0].findValueByName("RGB565 Bitmap");
    displayBrightnessValue = displayDevice[0].findValueByName("Brightness");
    displayTextValue = displayDevice[0].findValueByName("Text input");
}

// Preventing textPanelForm from submitting upon 'Enter' keypress
textPanelForm.addEventListener('keypress', (event) => 
{
    if (event.keyCode === 13 || event.which === 13) 
    {
        const element = event.textInput;
        if(element.tagName !== 'textInput')
        {
            event.preventDefault();
        }
    }
});

textPanelForm.addEventListener('input', (event) => 
{
    event.preventDefault();
    //console.log("Text Panel change event triggered");
    drawText(getTextInputElementData());
});

function sendToScreen()
{
  //const form = document.forms.textPanelForm;
  console.log("sendToScreen():",getTextInputElementData());
  drawText(getTextInputElementData());
  displayTextValue[0].control(JSON.stringify(getTextInputElementData()));
}

function setup() 
{
    createCanvas(screenWidth * boxSize, screenHeight * boxSize);
    //background(0);

    cols = Math.floor(screenWidth);
    rows = Math.floor(screenHeight);
    console.log("sWidth",screenWidth,"sHeigth",screenHeight,"cols:", cols,"rows:",rows);
    grid = new Array(cols);
  
    for (let i = 0; i < cols; i++)
    {
      grid[i] = new Array(rows);
    }
  
    for (let y = 0; y < cols; y++) 
    {
      for (let x = 0; x < rows; x++) 
      {
        grid[y][x] = new Pixel(x, y, 51); //Math.floor(Math.random()*255)
      }
    }
    
    for (let y = 0; y < cols; y++) 
    {
      for (let x = 0; x < rows; x++) 
      {
         grid[y][x].show();
      }
    }
}

class Pixel {
    constructor(x, y, c) {
        this.show = function () {
            fill(c);
            stroke(0); //pixel border color
            rect(x * boxSize, y * boxSize, boxSize, boxSize);
        };
    }
}

function drawPixel(x,y,c)
{
    grid[y][x] = new Pixel(x, y, c);
    grid[y][x].show();
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

function fillScreen(c)
{
    fillRect(0,0,screenWidth,screenHeight,c);
}

function clearScreen()
{
    fillRect(0,0,screenWidth,screenHeight,51);

    let scrnClr = {
        x: 0,
        y: 0,
        w: screenWidth,
        h: screenHeight,
        tColor: "0",
        bColor: "0",
        tSize: 1,
        text: ""
    }

    displayTextValue[0].control(JSON.stringify(scrnClr));
}

function drawChar(char, x, y, tSize, c) 
{
    //console.log("drawChar:", char,x,y,tSize,c);
    if (char === undefined || char === null) {
        console.error("Invalid value for 'char' parameter", char);
        return;
    }
    
    let index = char.charCodeAt(0);
    //console.log(index);

    for(let i = 0; i < charWidth; i++)
    {
        let chr = classicAdafruitFont[index * 5 + i];
        for(let j = 0; j < charHeight; j++, chr >>= 1)
        {
            if(chr & 1)
            {
                if(tSize==1)
                {
                    drawPixel(x+i,y+j, c);
                }

                fillRect(x+(i*tSize),y+(j*tSize), tSize, tSize, c);
            }
        }
    }

}

function drawText(object)//x,y,text,w,h,tColor,bColor,tSize
{
    let {x=0,y=0,text="",w,h,tColor=255,bColor=51,tSize=1} = object;
    //console.log("drawText(): ",x,y,text,w,h,tColor,bColor,tSize);
    
    let charArray = text.split('');
    let startXPos = x;
    let lineCharLimit = Math.floor(screenWidth/(charWidth+1));
    let charCount = Math.floor(startXPos/(charWidth+1));//used for calculating how many chars available on the line
    
    if(w && h)
    {
        fillRect(x,y,w,h,bColor);
        let lineCharLimit = Math.floor((w/(charWidth+1))/tSize);
        let maxCharLimit = lineCharLimit * Math.floor(h / (charHeight * tSize));
        let charCount = 0;//treat as if x start position is 0
        console.log("max char limit:", maxCharLimit,"line char limit", lineCharLimit);
        for(let charWritten = 0; charWritten < maxCharLimit && charWritten < charArray.length; charWritten++)
        {
            if(charCount == lineCharLimit)
            {
                y+=charHeight * tSize;
                x=startXPos;
                charCount = 0;//Math.floor(startXPos/(charWidth+1));
                //console.log("Shifting y to:",y,"Start position X:", startXPos, "Reserved chars:",Math.ceil(startXPos/Math.floor((charWidth+1)*tSize)));
            }
            if(charArray[charWritten] == '\n')
            {
                y+=charHeight * tSize;
                x=startXPos;
                charCount++;
                maxCharLimit-=(lineCharLimit-charCount);
                charCount=0;
                //console.log("Shifting 'y' due to newline char");
            }
            if(charArray[charWritten] != '\n')
            {
                drawChar(charArray[charWritten],x,y,tSize,tColor);
                charCount++;
                //console.log("char written:", charWritten+1);
                x+=(charWidth+1) * tSize;
            }
            console.log("x",x,"y:",y,"Start position X:", startXPos,"Max char limit:",maxCharLimit,"Char written:", charWritten);
        }
    }
    else
    {
        for(let i = 0; i < charArray.length; i++, x+=(charWidth+1) * tSize)
        {
            //console.log("pos x:",x);
            if(charCount == lineCharLimit)
            {
                y+=charHeight * tSize;
                x=startXPos;
                charCount = Math.floor(startXPos/(charWidth+1));
                console.log("pos y:",y,"Start X position:", startXPos, "char count:",charCount);
            }
            drawChar(charArray[i],x,y,tSize,tColor);
            charCount++;
        }
    }
}

function drawXBitmap(x,y,bitmap,w,h,c)
{
    const byteWidth = Math.floor((w + 7) / 8);
    b = new Uint8ClampedArray(bitmap.length);
    
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