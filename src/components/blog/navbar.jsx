import React from "react"
import styled from "styled-components"
import { useRef, useState, useEffect } from "react"
import { Link } from "gatsby"
import NeonWord from "../global_elements/neonWord"

const NavbarS = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* border-top: 3px solid #ffb3de; */
  border-bottom: 3px solid #ffb3de;
  background: none;
  @media (max-width: 375px) {
    display: none;
  }

  a {
    font-family: "Nexa";
  }
  animation: flickerNB 3s linear infinite;

  @keyframes flickerNB {
    from {
      box-shadow: 0 0 20px #ff1493;
    }

    5% {
      box-shadow: 0 0 18px #ff1493;
    }

    10% {
      box-shadow: 0 0 19px #ff1493;
    }

    15% {
      box-shadow: 0 0 22px #ff1493;
    }

    20% {
      box-shadow: 0 0 19px #ff1493;
    }

    25% {
      box-shadow: 0 0 18px #ff1493;
    }

    30% {
      box-shadow: 0 0 23px #ff1493;
    }

    35% {
      box-shadow: 0 0 18px #ff1493;
    }

    40% {
      box-shadow: 0 0 20px #ff1493;
    }

    45% {
      box-shadow: 0 0 19px #ff1493;
    }

    50% {
      box-shadow: 0 0 14px #ff1493;
    }

    55% {
      box-shadow: 0 0 17px #ff1493;
    }

    60% {
      box-shadow: 0 0 20px #ff1493;
    }

    65% {
      box-shadow: 0 0 24px #ff1493;
    }

    70% {
      box-shadow: 0 0 21px #ff1493;
    }

    75% {
      box-shadow: 0 0 19px #ff1493;
    }

    80% {
      box-shadow: 0 0 19px #ff1493;
    }

    85% {
      box-shadow: 0 0 14px #ff1493;
    }

    90% {
      box-shadow: 0 0 19px #ff1493;
    }

    95% {
      box-shadow: 0 0 20px #ff1493;
    }

    to {
      box-shadow: 0 0 19px #ff1493;
    }
  }
`
const Element = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  color: #222222;
  margin: 0px 50px;
  cursor: pointer;
  padding: 20px 0px;
  display: flex;
  flex-direction: row;

  text-transform: capitalize;
  a {
    font-style: normal;
    font-weight: normal;
    color: #ffb3de;
    padding: 20px 0px;
    font-family: "Clip";
    font-size: 24px;
    display: flex;
    flex-direction: row;
  }
  /* border-bottom: ${props =>
    props.type === "picked" ? `4px solid #2d3826` : `0px solid #2d3826`}; */
`
const NavbarSM = styled.div`
  width: 100%;
  background: #f2f6ef;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom: ${props =>
    props.open ? `1px solid #e1e1e1` : `0px solid #e1e1e1`};
  margin-bottom: 16px;

  @media (min-width: 375px) {
    display: none;
  }
`
const ElementM = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  color: #222222;
  margin: 0px 24px;
  cursor: pointer;
  padding: 10px 0px;
  padding-bottom: ${props => (props.type === "picked" ? `6px` : `10px`)};
  text-transform: capitalize;

  a {
    color: #222222;
    padding: 10px 0px;
    font-family: "Nexa";
  }

  border-bottom: ${props =>
    props.type === "picked" ? `4px solid #2d3826` : `0px solid #2d3826`};
`

const HamburgerOpen = styled.div`
  width: 100%;
  height: 64px;
  border-top: 1px solid #e1e1e1;
  border-bottom: ${props =>
    props.open ? `0px solid #e1e1e1` : `1px solid #e1e1e1`};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ArrowDown = styled.div`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 6px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
`

function Navbar({ categories, location }) {
  const [pick, setPicked] = useState(-1)
  const [open, setOpen] = useState(false)
  const ref = useRef([])

  function filterCategoryName(name) {
    name = name.replaceAll("-", " ")
    name = name.replaceAll("/", "")
    return name
  }

  useEffect(() => {
    let url = window.location.pathname
    let target = url.slice(0, url.length)
    target = filterCategoryName(target.toLowerCase())
    console.log("first", target)

    ref.current.forEach((el, i) => {
      if (filterCategoryName(el.textContent.toLowerCase()).includes(target)) {
        console.log("proslo", target)
        setPicked(i)
        return false
      }
    })
    if (target === "") setPicked(0)

    // let params = new URLSearchParams(document.location.search)
    // console.log("params", params)
    // let varpick = params.get("pick")
    // console.log("params", varpick)
    // setPicked(parseInt(varpick))
  }, [])

  return (
    <>
      <NavbarS>
        {pick === 0 ? (
          <Element type="picked">
            <NeonWord fast={""} normal1="All" slow="" normal2="" size="24px" />
            <div>&nbsp;</div>
            <NeonWord
              fast={""}
              normal1=""
              slow=""
              normal2="blogs"
              size="24px"
            />
          </Element>
        ) : (
          <Element
            ref={el => (ref.current[0] = el)}
            onClick={() => setPicked(0)}
          >
            <Link to={`/`}>
              {" "}
              <NeonWord
                fast={""}
                normal1="All"
                slow=""
                normal2=""
                size="24px"
                off={true}
              />
              <div>&nbsp;</div>
              <NeonWord
                fast={""}
                normal1=""
                slow=""
                normal2="blogs"
                size="24px"
                off={true}
              />
            </Link>
          </Element>
        )}
        {pick === 1 ? (
          <Element type="picked">
            <NeonWord
              fast={""}
              normal1="Featured"
              slow=""
              normal2=""
              size="24px"
            />
          </Element>
        ) : (
          <Element
            ref={el => (ref.current[1] = el)}
            onClick={() => setPicked(1)}
          >
            <Link to={`/featured`}>
              <NeonWord
                fast={""}
                normal1="Featured"
                slow=""
                normal2=""
                size="24px"
                off={true}
              />
            </Link>
          </Element>
        )}
        {categories.map((category, i) => {
          return pick === i + 2 ? (
            <Element type="picked">
              <NeonWord
                fast={""}
                normal1={filterCategoryName(category)}
                slow=""
                normal2=""
                size="24px"
              />
            </Element>
          ) : (
            <Element
              ref={el => (ref.current[i + 2] = el)}
              onClick={() => setPicked(i + 2)}
            >
              <Link to={`/${category}`}>
                {" "}
                <NeonWord
                  fast={""}
                  normal1={filterCategoryName(category)}
                  slow=""
                  normal2=""
                  size="24px"
                  off={true}
                />
              </Link>
            </Element>
          )
        })}
      </NavbarS>
      <NavbarSM open={open}>
        <HamburgerOpen
          open={open}
          onClick={() => {
            setOpen(!open)
          }}
        >
          <ArrowDown />
        </HamburgerOpen>
        {open && (
          <>
            {pick === 0 ? (
              <ElementM type="picked">Sve objave</ElementM>
            ) : (
              <ElementM onClick={() => setPicked(0)}>
                <Link to={`/`}>Sve objave</Link>
              </ElementM>
            )}
            {pick === 1 ? (
              <ElementM type="picked">Istaknuto</ElementM>
            ) : (
              <ElementM onClick={() => setPicked(1)}>
                <Link to={`/istaknuto`}>Istaknuto</Link>
              </ElementM>
            )}
            {categories.map((category, i) => {
              return pick === i + 2 ? (
                <ElementM type="picked">
                  {filterCategoryName(category)}
                </ElementM>
              ) : (
                <ElementM onClick={() => setPicked(i + 2)}>
                  <Link to={`/${category}`}>
                    {filterCategoryName(category)}
                  </Link>
                </ElementM>
              )
            })}
          </>
        )}
      </NavbarSM>
    </>
  )
}

export default Navbar
