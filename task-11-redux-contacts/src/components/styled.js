import styled from 'styled-components'

export const Header = styled.header`
  background: #212121;

  @media (min-width: 1440px) {
    padding: 15px calc((100% - 1440px) / 2);
  }

  @media (max-width: calc(1440px + 27px + 27px)) {
    padding: 15px 27px;
  }

  a {
    display: flex;
  }
`

export const Container = styled.div`
  @media (min-width: 1156px) {
    padding: 47px calc((100% - 1156px) / 2);
  }

  @media (max-width: calc(1156px + 40px)) {
    padding: 47px 20px;
  }
`

export const Card = styled.div`
  background: #ffffff;
  box-shadow: 1px 1px 3px rgba(33, 33, 33, 0.25);
  border-radius: 4px;
  max-width: 250px;

  img {
    width: 100%;
    max-height: 134px;
    object-fit: cover;
    border-radius: 4px 4px 0 0;
  }

  p {
    margin: 0;
  }

  .card {
    &__inner {
      padding: 9px 8px 11px;
      display: flex;
      flex-flow: column;
    }

    &__heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 11px;
    }

    &__title {
      font-size: 18px;
    }

    &__detail {
      font-size: 13px;
      margin-bottom: 6px;
      display: flex;
      align-items: center;

      &:last-child {
        margin-bottom: 0;
      }
    }

    &__icon {
      margin-right: 5px;
    }

    &__info {
      margin-bottom: 17px;
    }

    &__button {
      background: #212121;
      border-radius: 2px;
      min-width: 95px;
      color: white;
      border: 0;
      font-size: 14px;
      min-height: 21px;
      cursor: pointer;
      align-self: flex-end;
    }
  }
`

export const Input = styled.input`
  font-size: 16px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 400;
  padding: 11px 16px 10px;
  border: 1px solid rgba(33, 33, 33, 0.35);
  border-radius: 2px;
  max-width: 550px;
  width: 100%;

  &::placeholder {
    color: rgba(33, 33, 33, 0.5);
  }

  margin-bottom: ${props => (props['mb-sm'] ? '16px' : '0')};
  margin-right: ${props => (props['mr-sm'] ? '16px' : '0')};
`

export const Icon = styled.span`
  width: ${props => props.width || '40px'};
  height: ${props => props.height || '40px'};
  display: inline-block;
  cursor: pointer;
  filter: ${props => (props.active ? 'grayscale(0)' : 'grayscale()')};
  margin-right: ${props => (props['mr-sm'] ? '16px' : '0')};
  background: ${props => {
    switch (props.name) {
      case 'heart--filled':
        return "url('/icons/heart--filled.svg')"
      case 'heart':
        return "url('/icons/heart.svg')"
      case 'sort-asc':
        return "url('/icons/sort-asc.svg')"
      case 'sort-desc':
        return "url('/icons/sort-desc.svg')"
      case 'location':
        return "url('/icons/location.svg')"
      case 'web':
        return "url('/icons/web.svg')"
      case 'mail':
        return "url('/icons/mail.svg')"
      case 'phone':
        return "url('/icons/phone.svg')"
      default:
        return ''
    }
  }}
    center / contain no-repeat;
`

export const Box = styled.div`
  flex-wrap: wrap;
  display: ${props => (props.flex ? 'flex' : 'block')};
  justify-content: ${props =>
    props['justify-between'] ? 'space-between' : ''};
  margin-bottom: ${props => (props['mb-md'] ? '30px' : '')};

  ${props => {
    if (props.grid) {
      return `
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        grid-gap: 42px 52px;

        .box__item {
          max-width: 100%;
        }
      `
    }
  }};
`

export const Contact = styled.div`
  @media (min-width: 1340px) {
    padding: 41px calc((100% - 1340px) / 2);
  }

  @media (max-width: calc(1340px + 50px + 50px)) {
    padding: 41px 50px;
  }

  .contact__heading {
    display: flex;
    align-items: center;
    margin-bottom: 41px;

    img {
      margin-right: 26px;
      border-radius: 4px;
    }
  }
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  max-width: 620px;
  justify-content: space-between;

  .field {
    max-width: 289px;
    width: 100%;
    display: flex;
    flex-flow: column;
    margin-bottom: 27px;

    span {
      font-size: 16px;
      color: rgba(33, 33, 33, 0.75);
      margin-bottom: 3px;
    }

    input {
      width: 100%;
      height: 40px;
      border: 1px solid rgba(33, 33, 33, 0.35);
      border-radius: 2px;
      padding: 0 8px;
      color: rgba(33, 33, 33, 0.75);
    }

    button {
      height: 40px;
      margin-top: auto;
      font-weight: 500;
      font-size: 18px;
      color: #FFFFFF;
      background: #212121;
      border: none;
      border-radius: 2px;
      cursor: pointer;  
    }
  }
`
