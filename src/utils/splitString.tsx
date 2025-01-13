function splitString(inputString: string): string[] {
    const characters: string[] = [];
    // Match HTML tags as a single unit or individual characters
    const regex = /(<[^>]+>|[\s\S])/gu;

    let match;
    while ((match = regex.exec(inputString)) !== null) {
        characters.push(match[0]);
    }

    return characters;
}

export default splitString;
