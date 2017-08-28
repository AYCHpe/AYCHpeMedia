export default class Segment {

    public url: string;
    public data: ArrayBuffer;
    public priority: number;

    public constructor(url: string, priority: number = 0) {
        this.url = url;
        this.priority = priority;
    }

}