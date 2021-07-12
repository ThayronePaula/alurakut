import * as S from "../components/MainGrid";
import { AlurakutMenu, OrkutNostalgicIconSet} from "../lib/AlurakutCommons";
export default function Home() {
  const githubUser = "ThayronePaula";

  const comunityUsers = [
    "omariosouto",
    "peas",
    "felipefialho",
    "rafaballerini",
    "diego3g",
    "marcobrunodev",
    
    
  ];
  return (
    <>
      <AlurakutMenu />
      <S.MainGrid>
        <div className="profileArea" style={{ gridArea: "profileArea" }}>
          <S.Box>
            <img
              src={`https://github.com/${githubUser}.png`}
              alt="profile"
              style={{ borderRadius: "8px" }}
            />
          </S.Box>
        </div>
        <div className="welcomeArea" style={{ gridArea: "welcomeArea" }}>
          <S.Box>
            <h1>Bem vindo(a)</h1>

            <OrkutNostalgicIconSet/>
          </S.Box>
        </div>
        <div
          className="profileRelationsArea"
          style={{ gridArea: "profileRelationsArea" }}
        >
          <S.ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({comunityUsers.length})
            </h2>
            <ul>
              {comunityUsers.map((friend) => (
                <li key={friend}>
                  <a href={`/users/${friend}`}>
                    <img
                      src={`https://github.com/${friend}.png`}
                      alt={"perfil-" + friend}
                    />
                    <span>{friend}</span>
                  </a>
                </li>
              ))}
            </ul>
          </S.ProfileRelationsBoxWrapper>
          {/* <S.Box>Cominidades</S.Box> */}
        </div>
      </S.MainGrid>
    </>
  );
}
