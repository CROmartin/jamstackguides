import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import path from "path-browserify";

const History = styled(Link)`
  box-shadow: none;
  border-radius: 16px;
  color: #007de6;
  text-decoration: none;
  :hover {
    color: #007de6;
  }
  text-transform: capitalize;
  white-space: nowrap;
`;
const OldHistory = styled(Link)`
  box-shadow: none;
  border-radius: 16px;
  color: #007de6;
  text-transform: capitalize;
  white-space: nowrap;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
  color: #007de6;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
`;
const CrumbsAlign = styled.div`
  margin-top: 24px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const Div = styled.div`
  text-align: left;
  margin: auto;
  width: 80%;
  transition: width 1s;
  overflow: hidden;
  @media (max-width: 980px) {
    width: 90%;
    font-size: 14px;
    line-height: 23px;
  }
  @media (max-width: 375px) {
    width: 92%;
    font-size: 14px;
    line-height: 23px;
  }
`;

export const Breadcrumbs = (props) => {
  let linkPath = "";

  const lastPage =
    props.currentPath.length > 0 ? props.currentPath.length - 1 : 0;

  return (
    <Div>
      <Flex>
        {props.currentPath.map((page, index) => {
          linkPath = path.join(linkPath, page);

          // If your home url is not /, you do not need the blowing
          page = page === "/" ? "home" : page;

          return (
            <CrumbsAlign>
              {index !== lastPage ? (
                <Flex>
                  <History to={linkPath}>
                    {(
                      decodeURIComponent(page).charAt(0).toUpperCase() +
                      decodeURIComponent(page).slice(1)
                    )
                      .replaceAll("-", " ")
                      .replaceAll("pdf", "PDF")
                      .replaceAll("Pdf", "PDF")}
                  </History>
                  <>&nbsp;>&nbsp; </>
                </Flex>
              ) : (
                <Flex>
                  {!props.customUrl && (
                    <OldHistory>
                      {(
                        decodeURIComponent(page).charAt(0).toUpperCase() +
                        decodeURIComponent(page).slice(1)
                      )
                        .replaceAll("-", " ")
                        .replaceAll("pdf", "PDF")
                        .replaceAll("Pdf", "PDF")}
                    </OldHistory>
                  )}
                  {props.customUrl && (
                    <OldHistory>{props.customUrl}</OldHistory>
                  )}
                </Flex>
              )}
            </CrumbsAlign>
          );
        })}
      </Flex>
    </Div>
  );
};
