import { Description, Poster, Text, Title, Wrapper } from './styles.js';

export function Info({ standup }) {
    const { posterV, duration, date, city, subs, description } = standup;

    return (
        <Wrapper>
            <Poster url={posterV} />
            <Text>
                <Title>продолжительность</Title>
                <span>{duration}</span>
                <Title>дата выхода</Title>
                <span>{date}</span>
                <Title>город</Title>
                <span>{city}</span>
                <Title>субтитры</Title>
                <span>{subs}</span>
                <Title description>описание</Title>
                <Description>{description}</Description>
            </Text>
        </Wrapper>
    );
}
