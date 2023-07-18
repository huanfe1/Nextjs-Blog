function crc32_str(str: string): number {
    const crcTable = new Uint32Array(256);
    const polynomial = 0xedb88320;

    for (let i = 0; i < 256; i++) {
        let crc = i;
        for (let j = 0; j < 8; j++) {
            crc = crc & 1 ? (crc >>> 1) ^ polynomial : crc >>> 1;
        }
        crcTable[i] = crc;
    }

    let crc = 0xffffffff;
    for (let i = 0; i < str.length; i++) {
        const charCode = str.charCodeAt(i);
        crc = (crc >>> 8) ^ crcTable[(crc ^ charCode) & 0xff];
    }
    crc ^= 0xffffffff;
    return crc >>> 0;
}

function crc32(str: string): string {
    const outstr = crc32_str(str).toString(16);
    if (outstr.length < 8) return crc32(str + outstr);
    return outstr;
}

export default crc32;
