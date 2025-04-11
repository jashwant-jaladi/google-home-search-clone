import styled from "styled-components"

export const Container = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 1rem;

 
`

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 1rem auto;
`

export const SearchInput = styled.input`
  width: 100%;
  padding: 0.6rem 2.5rem; /* Leave space for icons */
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: inherit;
  color: white;
  
`

export const IconButton = styled.button`
  position: absolute;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
  font-size: 1.2rem;

  &:hover {
    color: #000;
  }
`

export const GoogleIcon = styled(IconButton)`
  left: 0.8rem;
  display: flex;
    align-items: center;
`

export const ClearIcon = styled(IconButton)`
  right: 0.8rem;
`


export const ResultItem = styled.li`
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  transition: box-shadow 0.2s ease;

  a {
    text-decoration: none;
    color: inherit; // inherit from theme or container
    display: block;
  }

  &:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  @media (prefers-color-scheme: dark) {
    border-color: #333;
    background-color: #1a1a1a;
  }
`


export const ResultTitle = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  color: dodgerblue; // Google's blue link
  margin-bottom: 0.25rem;

  &:hover {
    text-decoration: underline;
  }
`


export const ResultMeta = styled.p`
  font-size: 0.95rem;
  color: #444;

  @media (prefers-color-scheme: dark) {
    color: #ccc;
  }
`





export const ResultList = styled.ul`
  list-style: none;
  padding: 0;
  display: grid;
  gap: 1rem;
`
export const SourceRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
  gap: 10px
`

export const Favicon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 0.5rem;
`

export const SourceInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.1;
`

export const SourceName = styled.span`
  font-size: 0.85rem;
  font-weight: 500;
  color: #555;

  @media (prefers-color-scheme: dark) {
    color: #aaa;
  }
`

export const SourceUrl = styled.span`
  font-size: 0.75rem;
  color: #888;

  @media (prefers-color-scheme: dark) {
    color: #bbb;
  }
`
