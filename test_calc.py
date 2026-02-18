from calc import add 

def test_add():
    assert add(2, 3) == 6

if __name__ == "__main__": 
    test_add()
    print("All tests passed!")