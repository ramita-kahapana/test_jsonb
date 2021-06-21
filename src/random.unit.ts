import { randomBytes } from 'crypto';

export class RandomUtil {
  private static readonly DEFAULT_CHARSET_STRING = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz';
  private static readonly DEFAULT_CHARSET_NUMBER = '1234567890';

  public static randomString(
    length: number,
    option?: { randomNumber: boolean },
  ): string {
    let selectCharSet: string;
    if (option?.randomNumber) {
      selectCharSet = this.DEFAULT_CHARSET_NUMBER;
    } else {
      selectCharSet = this.DEFAULT_CHARSET_STRING;
    }

    const charSetLenght = selectCharSet.length;

    const randomBytesBuffer: Buffer = randomBytes(length);
    const result = new Array(length);

    let cursor = 0;
    for (let i = 0; i < length; i++) {
      cursor += randomBytesBuffer[i];
      result[i] = selectCharSet[cursor % charSetLenght];
    }

    return result.join('');
  }
}
//ท่าที่พี่ฟอร์ดใช้ และพี่ฟอร์ดแนะนำมาค่ะ 