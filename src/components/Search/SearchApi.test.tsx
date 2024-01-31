import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import Search from '.';

const axiosMock = new MockAdapter(axios);

test('searchPokemon should make a successful API request and update state', async () => {
  const mockedResponse = {
    species: { name: 'mockedSpecies' },
    sprites: { front_default: 'mockedImageUrl' },
    stats: [
      { base_stat: 50 }, 
      { base_stat: 60 }, 
      { base_stat: 70 }, 
    ],
    types: [{ type: { name: 'mockedType' } }],
  };

  axiosMock.onGet('https://pokeapi.co/api/v2/pokemon/testPokemon').reply(200, mockedResponse);

  render(<Search />);

  fireEvent.change(screen.getByRole('textbox'), { target: { value: 'testPokemon' } });
  fireEvent.click(screen.getByText('Search Pokémon'));

  await waitFor(() => {
    expect(screen.getByText('testPokemon')).toBeDefined();
    expect(screen.getByAltText('Pokemon Image').getAttribute('src')).toEqual('mockedImageUrl');
    expect(screen.getByText('Species: mockedSpecies')).toBeDefined();
    expect(screen.getByText('Type: mockedType')).toBeDefined();
    expect(screen.getByText('HP: 50')).toBeDefined();
    expect(screen.getByText('Attack: 60')).toBeDefined();
    expect(screen.getByText('Defense: 70')).toBeDefined();
  });
});
