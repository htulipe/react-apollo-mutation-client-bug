import React from 'react';
import renderer from 'react-test-renderer';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { MockedProvider } from '@apollo/react-testing';

const SOME_MUTATION = gql`
  mutation whatever($param: String!) {
    whatever(name: $param) {
      id
    }
  }
`;

const Component = () => {
  const [_, { client }] = useMutation(SOME_MUTATION);
  if (!client) throw new Error('No client');
  return <div>Hello</div>;
};

it('Should pass the client', () => {
  renderer.create(
    <MockedProvider>
      <Component />
    </MockedProvider>
  );
});
