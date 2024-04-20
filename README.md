# LA_245_Prototyp

# Inhalt

[Problembeschreibung](#problembeschreibung)

[GitHub](#github)

[Anforderungen](#anforderungen)

[Art und Vorgehensweise Prototyping](#art-und-vorgehensweise-prototyping)

[Testfallspezifikationen](#testfallspezifikationen)

[Testprotokoll](#testprotokoll)

[Testbericht](#testbericht)

[Testumfeld](#testumfeld)

[Fazit und Reflexion](#fazit-und-reflexion)

# Problembeschreibung

In der heutigen digitalen Welt ist es wichtiger denn je, Notizen, Aufgaben und Ideen zuverlässig zu organisieren und zu verwalten. OneNote war lange Zeit eine beliebte Wahl für Studenten, Berufstätige und Privatnutzer. In letzter Zeit hat sich jedoch die Wahrnehmung der Anwendung geändert, da viele Nutzer mit Unzuverlässigkeit und Synchronisationsproblemen zu kämpfen haben. Ausserdem sind die ganzen Ablagen viel zu durcheinander und man braucht viele Klicks, nur um eine Aufgabe zu öffnen oder zu verteilen.

# GitHub

<https://github.com/EllisArn/LA_245_Prototyp>

# Anforderungen

| **Nr.** | **Typ**  | **Beschreibung**                                                                    |
| :-----: | :------- | :---------------------------------------------------------------------------------- |
|  **1**  | Qualität | Das Design ist intuitiv und kann leicht von unerfahrenen Benutzern navigiert werden |
|  **2**  | Qualität | Ein Benutzer kann mit einem Dropdown einfach das Fach wechseln                      |
|  **3**  | Qualität | Ein Benutzer kann innerhalb von 1 – 4 Klicks ein Thema zuweisen                     |
|  **4**  | Qualität | Ein Benutzer kann innerhalb von 1 – 4 Klicks eine Aufgabe zuweisen                  |

# Art und Vorgehensweise Prototyping

Für meinen Prototypen werde ich einen Designprototypen erstellen. Die Wahl eines Designprototyps begründet sich in meinem Hauptziel, die Benutzerfreundlichkeit der Anwendung zu optimieren. Ein Designprototyp eignet sich ideal, um die User Experience zu testen und zu verbessern, bevor mit der eigentlichen Entwicklung begonnen wird.

Zunächst hatte ich die Erstellung des Prototyps mit Tools wie Adobe XD oder Figma in Betracht gezogen. Diese Tools eignen sich gut für die Erstellung von Designprototypen. Mir wurde das dann aber zu durcheinander und ich habe lieber eine React-App gemacht.

Ich benutze evolutionäres Prototyping, weil es mir ermöglicht, die Benutzerfreundlichkeit meiner Anwendung effektiv zu optimieren und gleichzeitig eine hohe Benutzerakzeptanz zu erreichen. Ausserdem sind meine Anforderungen noch nicht vollständig definiert und können sich im Laufe des Entwicklungsprozesses ändern. Dafür eignet sich am besten ein evolutionäres Prototyping.

# Testfallspezifikationen

| **Testfall-Nr.** | **Anforderungs-Nr.** | **Voraussetzung**                                                                       | **Eingabe**                                                                                                                                                                                                                            | **Erwartete Ausgabe**                                                                                                                                                                                                               |
| :--------------- | :------------------- | :-------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **1.1**          | 1                    | Der Benutzer hat die Seite geöffnet                                                     | Der Benutzer navigiert durch die Seite                                                                                                                                                                                                 | Die Benutzeroberfläche ist klar strukturiert und alle Funktionen sind leicht zu finden                                                                                                                                              |
| **2.1**          | 2                    | Der Benutzer hat die Seite geöffnet und es werden ihm die Themen eines Faches angezeigt | Der Benutzer klickt auf den Dropdown Button                                                                                                                                                                                            | Die Themen verschwinden und die Fächer erscheinen                                                                                                                                                                                   |
| **2.2**          | 2                    | Der Benutzer hat die Seite geöffnet und es werden ihm die Fächer angezeigt              | Der Benutzer klickt auf den Dropdown Button                                                                                                                                                                                            | Die Fächer verschwinden und die Themen erscheinen                                                                                                                                                                                   |
| **2.3**          | 2                    | Der Benutzer hat die Seite geöffnet und es werden ihm die Themen eines Faches angezeigt | Der Benutzer klickt auf eines der Fächer                                                                                                                                                                                               | Die Fächer verschwinden und die Themen des Faches erscheinen                                                                                                                                                                        |
| **3.1**          | 3                    | Der Benutzer hat die Seite geöffnet                                                     | <p>1\. Der Benutzer klickt auf das Dropdown</p><p>3\. Der Benutzer klickt auf ein Fach</p><p>5\. Der Benutzer macht einen Rechtsklick auf eines der Themen</p><p>7\. Der Benutzer klickt auf den Button fürs Zuweisen des Themas</p>   | <p>2\. Die Themen verschwinden und die Fächer erscheinen</p><p>4\. Die Fächer verschwinden und die Themen des Faches erscheinen</p><p>6\. Ein Fenster (Button) für das Zuweisen erscheint</p><p>8\. Das Thema wird zugewiesen</p>   |
| **4.1**          | 4                    | Der Benutzer hat die Seite geöffnet                                                     | <p>1\. Der Benutzer klickt auf das Dropdown</p><p>3\. Der Benutzer klickt auf ein Fach</p><p>5\. Der Benutzer macht einen Rechtsklick auf eine der Aufgaben</p><p>7\. Der Benutzer klickt auf den Button fürs Zuweisen der Aufgabe</p> | <p>2\. Die Themen verschwinden und die Fächer erscheinen</p><p>4\. Die Fächer verschwinden und die Themen des Faches erscheinen</p><p>6\. Ein Fenster (Button) für das Zuweisen erscheint</p><p>8\. Die Aufgabe wird zugewiesen</p> |

# Testprotokoll

| <a name="_toc163246250"></a>**Nummer** | **Testfall Nr.** | **Datum**   | **Resultat** | **Bemerkung** | **Durchgeführt** |
| :------------------------------------- | :--------------- | :---------- | :----------- | :------------ | :--------------- |
| **1**                                  | 1\.1             | 20\.04.2024 | OK           | -             | Ellis Arn        |
| **2**                                  | 2\.1             | 20\.04.2024 | OK           | -             | Ellis Arn        |
| **3**                                  | 2\.2             | 20\.04.2024 | OK           | -             | Ellis Arn        |
| **4**                                  | 2\.3             | 20\.04.2024 | OK           | -             | Ellis Arn        |
| **5**                                  | 3\.1             | 20\.04.2024 | OK           | -             | Ellis Arn        |
| **6**                                  | 4\.1             | 20\.04.2024 | OK           | -             | Ellis Arn        |

# Testbericht

Der Prototyp läuft einwandfrei und alle Anforderungen wurden erfüllt.

# Testumfeld

Es wurde auf Ellis Arns Computer mit Windows 10 Pro in Google Chrome getestet.

![Ein Bild von der Gerätespezifikation](https://github.com/EllisArn/LA_245_Prototyp/assets/89130718/7004fefe-861b-47de-937b-c889e7598c78)

![Ein Bild von der Windows-Spezifikation](https://github.com/EllisArn/LA_245_Prototyp/assets/89130718/a73b82bf-085d-483e-9367-2c0d349dba3b)

npm Version: 10.5.2

Node Version: v20.9.0

VS Code Version: 1.88.1

e170252f762678dec6ca2cc69aba1570769a5d39

x64

![Ein Bild von der Google Chome Version](https://github.com/EllisArn/LA_245_Prototyp/assets/89130718/fd8f1aaa-101e-4bf3-8d09-05e76f100120)

# Fazit und Reflexion

Um ehrlich zu sein hätte ich mir gewünscht, dass ich mir ein besseres Projekt im Modul 241 überlegt hätte. Ich hätte lieber einen Funktionsprototypen gemacht, da mir das Backend besser liegt als das Frontend und weil ich einen Funktionsprototypen simpler finde als einen Designprototypen.

Rückblickend würde ich aber sagen, dass auch wenn der Prototyp noch sehr grob ist, ich meine Anforderungen erfüllen konnte und dass das Design intuitiv ist.
