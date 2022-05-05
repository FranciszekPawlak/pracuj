import './style.scss'

export const Requirements = () => {
  return (
    <div className='requirements'>
      <h2>Franciszek Pawlak</h2>
      <h1>Requirements</h1>
      <p>
        Napisz aplikację korzystając z najnowszego api <span>react.js (hooki, Context,</span> itd.)
        spełniającą poniższe założenia.
      </p>
      <p>Aplikacja ma się składać z minimum 3 ekranów:</p>
      <ol>
        <li>Wyszukiwarka projektów githubowych</li>
        <li>Założenia całej aplikacji</li>
        <li>Wyliczanie silni</li>
      </ol>
      <p>Ad 1:</p>
      <ul>
        <li>Wykorzystane jest publiczne API Githuba;</li>
        <li>Czeka na podanie loginu użytkownika:</li>
        <ul>
          <li>waliduje poprawność; </li>
          <li>obsługuje nieistniejące loginy;</li>
        </ul>
        <li>wyświetla maksymalnie 5 projektów w kolejności od ostatnio updatowanego:</li>
        <ul>
          <li>wyświetla maksymalnie 5 commitów każdego z projektów;</li>{' '}
        </ul>
      </ul>
      <p>Ad 2:</p>
      <ul>
        <li>
          wyświetla niniejszą treść (listę wymagań) z podobnym (takim samym) podziałem i układem;
        </li>
        <li>proszę zawrzeć też autora aplikacji - własne imię i nazwisko;</li>
      </ul>
      <p>Ad 3:</p>
      <ul>
        <li>
          input do podania liczby dla której będzie wyliczona{' '}
          <a rel='noreferrer' target='blank' href='https://pl.wikipedia.org/wiki/Silnia'>
            silnia
          </a>
          ;
        </li>
        <li>historia poprzednich wyliczeń.</li>
      </ul>
      <p>Ogólne</p>
      <ul>
        <li>
          korzysta z <span>LESS / SASS</span>. Spełnia wymogi <span>BEM</span>. Jest też{' '}
          <span>estetyczna</span>;
        </li>
        <li>
          wyświetla <span>co drugi</span> element każdej listy wyróżnionym kolorem;
        </li>
        <li>
          jest <span>hostowana</span> (github pages, heroku, itd..), a jej kod jest dostępny{' '}
          <span>publicznie</span>;
        </li>
      </ul>
      <p>
        Miło widziane użycie <span>middlewarów reduxowych.</span>
      </p>
    </div>
  )
}
