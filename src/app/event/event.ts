export class Event {
    constructor(
        public id: number,
        public name: string,
        public updated: string,
        public content: string,
        public eventDate: string,
        public locationCity: string,
        public locationState: string
        ) { }
}
